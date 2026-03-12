import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { buildPaginatedResponse } from 'src/common/get-pagination-response';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Actor } from 'src/actors/entities/actor.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(Actor)
    private actorsRepository: Repository<Actor>,
  ) {}

  async findAll(paginationDto: PaginationQueryDto) {
    const [movies, total] = await this.moviesRepository.findAndCount({
      where: paginationDto.search
        ? { title: ILike(`%${paginationDto.search}%`) }
        : {},
      skip: paginationDto.skip,
      take: paginationDto.limit,
    });

    return buildPaginatedResponse<Movie>(
      movies,
      total,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  async findActorsByMovie(movieId: number, paginationDto: PaginationQueryDto) {
    const movie = await this.moviesRepository.findOne({
      where: { id: movieId },
    });
    if (!movie)
      throw new NotFoundException(`Movie with id ${movieId} not found`);

    const [actors, total] = await this.actorsRepository
      .createQueryBuilder('actor')
      .innerJoin('actor.movies', 'movie')
      .where('movie.id = :movieId', { movieId })
      .skip(paginationDto.skip)
      .take(paginationDto.limit)
      .getManyAndCount();

    return buildPaginatedResponse<Actor>(
      actors,
      total,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  async create(movieDto: CreateMovieDto): Promise<Movie> {
    const actors = await this.actorsRepository.find({
      where: {
        id: In(movieDto.actors),
      },
    });

    if (actors.length !== movieDto.actors.length) {
      throw new BadRequestException('One or more actor ids are invalid');
    }

    const movie = this.moviesRepository.create({
      ...movieDto,
      actors: actors,
    });

    return this.moviesRepository.save(movie);
  }

  async update(id: number, movie: UpdateMovieDto): Promise<Movie> {
    const existingMovie = await this.moviesRepository.findOneBy({ id });
    if (!existingMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    const updatedMovie = this.moviesRepository.merge(existingMovie, movie);
    return this.moviesRepository.save(updatedMovie);
  }

  async delete(id: number): Promise<void> {
    const existingMovie = await this.moviesRepository.findOneBy({ id });
    if (!existingMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    await this.moviesRepository.remove(existingMovie);
  }
}

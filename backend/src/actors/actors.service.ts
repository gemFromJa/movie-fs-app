import { Injectable, NotFoundException } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Actor } from './entities/actor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { Movie } from 'src/movies/entities/movies.entity';
import { buildPaginatedResponse } from 'src/common/get-pagination-response';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor)
    private actorsRepository: Repository<Actor>,
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findAll(paginationDto: PaginationQueryDto) {
    const [actors, total] = await this.actorsRepository.findAndCount({
      where: paginationDto.search
        ? { name: ILike(`%${paginationDto.search}%`) }
        : {},
      skip: paginationDto.skip,
      take: paginationDto.limit,
      order: { name: 'ASC' },
    });

    return buildPaginatedResponse<Actor>(
      actors,
      total,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  async findMoviesByActor(actorId: number, paginationDto: PaginationQueryDto) {
    const actor = await this.actorsRepository.findOne({
      where: { id: actorId },
    });
    if (!actor)
      throw new NotFoundException(`Actor with id ${actorId} not found`);

    const [movies, total] = await this.moviesRepository
      .createQueryBuilder('movie')
      .innerJoin('movie.actors', 'actor')
      .where('actor.id = :actorId', { actorId })
      .skip(paginationDto.skip)
      .take(paginationDto.limit)
      .getManyAndCount();

    return buildPaginatedResponse<Movie>(
      movies,
      total,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  async create(actor: CreateActorDto): Promise<Actor> {
    return this.actorsRepository.save(actor);
  }

  async update(id: number, actor: UpdateActorDto): Promise<Actor> {
    const existingActor = await this.actorsRepository.findOneBy({ id });
    if (!existingActor)
      throw new NotFoundException(`Actor with id ${id} not found`);

    return this.actorsRepository.save(
      this.actorsRepository.merge(existingActor, actor),
    );
  }

  async delete(id: number): Promise<void> {
    const existingActor = await this.actorsRepository.findOneBy({ id });
    if (!existingActor)
      throw new NotFoundException(`Actor with id ${id} not found`);

    await this.actorsRepository.delete(id);
  }
}

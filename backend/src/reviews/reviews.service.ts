import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { Movie } from '../movies/entities/movies.entity';
import { UpdateReviewDto } from './dto/update-review.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { buildPaginatedResponse } from 'src/common/get-pagination-response';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>,
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async findReviewsByMovie(movieId: number, paginationDto: PaginationQueryDto) {
    const [reviews, total] = await this.reviewsRepository.findAndCount({
      where: { movie: { id: movieId } },
      skip: paginationDto.skip,
      take: paginationDto.limit,
    });

    return buildPaginatedResponse<Review>(
      reviews,
      total,
      paginationDto.page,
      paginationDto.limit,
    );
  }

  async findOne(id: number): Promise<Review | null> {
    return this.reviewsRepository.findOneBy({ id });
  }

  async create(
    movieId: number,
    review: CreateReviewDto,
  ): Promise<Review | null> {
    const movie = await this.moviesRepository.findOne({
      where: { id: movieId },
    });

    if (movie != null) {
      const newReview = this.reviewsRepository.create({
        comment: review.comment,
        rating: review.rating,
        movie: movie,
      });

      return await this.reviewsRepository.save(newReview);
    }

    throw new NotFoundException(`Movie with id ${movieId} not found`);
  }

  async update(id: number, review: UpdateReviewDto): Promise<Review | null> {
    const existingReview = await this.reviewsRepository.findOneBy({ id });

    if (!existingReview) {
      throw new BadRequestException(`Review with id ${id} not found`);
    }

    if (!review.comment && !review.rating) {
      return existingReview;
    }

    if (review.comment) {
      existingReview.comment = review.comment ?? existingReview.comment;
    }

    if (review.rating) {
      existingReview.rating = review.rating ?? existingReview.rating;
    }

    return await this.reviewsRepository.save(existingReview);
  }

  async remove(id: number): Promise<void> {
    await this.reviewsRepository.delete(id);
  }
}

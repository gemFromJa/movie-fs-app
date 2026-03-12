import { Module } from '@nestjs/common';
import { Review } from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsController } from './reviews.controller';
import { ReviewService } from './reviews.service';
import { Movie } from 'src/movies/entities/movies.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Movie]), AuthModule],
  controllers: [ReviewsController],
  providers: [ReviewService],
})
export class ReviewsModule {}

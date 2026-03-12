import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { PaginationQueryDto } from 'src/common/dto/pagination.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewService: ReviewService) {}

  @Get('/movie/:id')
  async findAllForMovie(
    @Param('id')
    id: number,
    @Query() params: PaginationQueryDto,
  ) {
    return this.reviewService.findReviewsByMovie(id, params);
  }

  @Post('/movie/:id')
  async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() params: CreateReviewDto,
  ) {
    return this.reviewService.create(id, params);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() params: UpdateReviewDto,
  ) {
    return this.reviewService.update(id, params);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.remove(id);
  }
}

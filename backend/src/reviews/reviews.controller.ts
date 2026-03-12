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
  UseGuards,
} from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { PaginationQueryDto } from 'src/common/dto/pagination.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ROLES } from 'src/auth/contants';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('reviews')
export class ReviewsController {
  constructor(private reviewService: ReviewService) {}

  @Public()
  @Get('/movie/:id')
  async findAllForMovie(
    @Param('id')
    id: number,
    @Query() params: PaginationQueryDto,
  ) {
    return this.reviewService.findReviewsByMovie(id, params);
  }

  @Roles(ROLES.admin, ROLES.moderator, ROLES.user)
  @Post('/movie/:id')
  async create(
    @Param('id', ParseIntPipe) id: number,
    @Body() params: CreateReviewDto,
  ) {
    return this.reviewService.create(id, params);
  }

  @Roles(ROLES.admin)
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() params: UpdateReviewDto,
  ) {
    return this.reviewService.update(id, params);
  }

  @Roles(ROLES.moderator, ROLES.admin)
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.remove(id);
  }
}

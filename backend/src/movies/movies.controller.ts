import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ROLES } from 'src/auth/contants';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Public()
  @Get()
  findAll(@Query() params: PaginationQueryDto) {
    return this.moviesService.findAll(params);
  }

  @Public()
  @Get('/:id/actors')
  findActorsByMovie(
    @Param('id') id: number,
    @Query() params: PaginationQueryDto,
  ) {
    return this.moviesService.findActorsByMovie(id, params);
  }

  @Public()
  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Roles(ROLES.admin)
  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Roles(ROLES.admin, ROLES.moderator)
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.delete(id);
  }
}

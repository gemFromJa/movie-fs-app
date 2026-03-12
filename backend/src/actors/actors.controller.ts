import {
  Body,
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Query,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ActorsService } from './actors.service';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { CreateActorDto } from './dto/create-actor.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get()
  async getAll(@Query() params: PaginationQueryDto) {
    return this.actorsService.findAll(params);
  }

  @Get('/:id/movies')
  async getMoviesByActor(
    @Query('id', ParseIntPipe) id: number,
    @Query() params: PaginationQueryDto,
  ) {
    return this.actorsService.findMoviesByActor(id, params);
  }

  @Post()
  async create(@Body() createActorDto: CreateActorDto) {
    return this.actorsService.create(createActorDto);
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActorDto: CreateActorDto,
  ) {
    return this.actorsService.update(id, updateActorDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.actorsService.delete(id);
  }
}

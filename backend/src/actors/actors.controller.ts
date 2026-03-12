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
  UseGuards,
} from '@nestjs/common';
import { ActorsService } from './actors.service';
import { PaginationQueryDto } from '../common/dto/pagination.dto';
import { CreateActorDto } from './dto/create-actor.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ROLES } from 'src/auth/contants';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Public()
  @Get()
  async getAll(@Query() params: PaginationQueryDto) {
    return this.actorsService.findAll(params);
  }

  @Public()
  @Get('/:id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return this.actorsService.find(id);
  }

  @Public()
  @Get('/:id/movies')
  async getMoviesByActor(
    @Query('id', ParseIntPipe) id: number,
    @Query() params: PaginationQueryDto,
  ) {
    return this.actorsService.findMoviesByActor(id, params);
  }

  @Roles(ROLES.admin)
  @Post()
  async create(@Body() createActorDto: CreateActorDto) {
    return this.actorsService.create(createActorDto);
  }

  @Roles(ROLES.admin)
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActorDto: CreateActorDto,
  ) {
    return this.actorsService.update(id, updateActorDto);
  }

  @Roles(ROLES.admin)
  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.actorsService.delete(id);
  }
}

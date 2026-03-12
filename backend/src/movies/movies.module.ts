import { Module } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movies.service';
import { Actor } from '../actors/entities/actor.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Actor]), AuthModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

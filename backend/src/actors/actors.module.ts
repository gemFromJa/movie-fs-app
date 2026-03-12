import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entities/actor.entity';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';
import { Movie } from 'src/movies/entities/movies.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Actor, Movie]), AuthModule],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}

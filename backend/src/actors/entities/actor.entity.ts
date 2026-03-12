import { Movie } from '../../movies/entities/movies.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  gender: string;

  @ManyToMany(() => Movie, (movie) => movie.actors)
  @JoinTable()
  movies: Movie[];
}

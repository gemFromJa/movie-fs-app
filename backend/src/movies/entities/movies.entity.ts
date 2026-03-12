import { Actor } from '../../actors/entities/actor.entity';
import { Review } from '../../reviews/entities/review.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  poster?: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column()
  director: string;

  @Column()
  releaseDate: Date;

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  @ManyToMany(() => Actor, (actor) => actor.movies)
  actors: Actor[];
}

import { Movie } from '../../movies/entities/movies.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @ManyToOne(() => Movie, (movie) => movie.reviews, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  movie: Movie;
}

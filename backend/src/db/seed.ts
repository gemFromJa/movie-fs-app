import { DataSource } from 'typeorm';
import dataSource from './data-source';
import { Movie } from '../movies/entities/movies.entity';
import { Actor } from '../actors/entities/actor.entity';

async function seed(ds: DataSource) {
  const movieRepo = ds.getRepository(Movie);
  const actorRepo = ds.getRepository(Actor);

  const movie = movieRepo.create({
    title: 'Forrest Gump',
    releaseDate: new Date('1994-07-06'),
    director: 'liam Scott',
    reviews: [],
  });
  const movie2 = movieRepo.create({
    title: 'Cast Away',
    releaseDate: new Date('2000-12-22'),
    director: 'liam Scott',
    reviews: [],
  });
  const actor = actorRepo.create({
    name: 'Tom Hanks',
    gender: 'm',
    movies: [movie, movie2],
  });
  const actor2 = actorRepo.create({
    name: 'Robin Wright',
    gender: 'f',
    movies: [movie],
  });

  await actorRepo.save([actor, actor2]);
  await movieRepo.save([movie, movie2]);

  console.log('✅ Seeding complete');
}

dataSource
  .initialize()
  .then(seed)
  .catch(console.error)
  .finally(() => dataSource.destroy());

import { DataSource } from 'typeorm';
import dataSource from './data-source';
import { Movie } from '../movies/entities/movies.entity';
import { Actor } from '../actors/entities/actor.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { movies } from './dummy-data';

async function seed(ds: DataSource) {
  const movieRepo = ds.getRepository(Movie);
  const actorRepo = ds.getRepository(Actor);
  const reviewRepo = ds.getRepository(Review);

  // for (let i = 0; i < 2; i++) {
  //   const movie = data[i];
  //   const actors = await actorRepo.upsert(movie.actors, ['name']);

  //   const newMovie = await movieRepo.create(movie);
  // }

  // const movie = movieRepo.create({
  //   title: 'Forrest Gump',
  //   releaseDate: new Date('1994-07-06'),
  //   director: 'liam Scott',
  //   reviews: [],
  // });
  // const movie2 = movieRepo.create({
  //   title: 'Cast Away',
  //   releaseDate: new Date('2000-12-22'),
  //   director: 'liam Scott',
  //   reviews: [],
  // });
  // const actor = actorRepo.create({
  //   name: 'Tom Hanks',
  //   gender: 'm',
  //   movies: [movie, movie2],
  // });
  // const actor2 = actorRepo.create({
  //   name: 'Robin Wright',
  //   gender: 'f',
  //   movies: [movie],
  // });

  // await actorRepo.save([actor, actor2]);
  // await movieRepo.save([movie, movie2]);
  for (const movieData of movies) {
    const savedMovie = await movieRepo.save(
      movieRepo.create({
        title: movieData.title,
        description: movieData.description,
        releaseDate: new Date(movieData.releaseDate),
        poster: movieData.poster || undefined,
        director: 'liam Scott',
      }),
    );

    const actors = await Promise.all(
      movieData.actors.map(async (actorData) => {
        let actor = await actorRepo.findOne({
          where: { name: actorData.name },
        });

        if (!actor) {
          actor = await actorRepo.save(actorRepo.create(actorData));
        }

        return actor;
      }),
    );

    savedMovie.actors = actors;
    await movieRepo.save(savedMovie);

    await reviewRepo.save(
      movieData.reviews.map((review) =>
        reviewRepo.create({
          ...review,
          movie: savedMovie,
        }),
      ),
    );
  }

  console.log('✅ Seeding complete');
}

dataSource
  .initialize()
  .then(seed)
  .catch(console.error)
  .finally(() => dataSource.destroy());

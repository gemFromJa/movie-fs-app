import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Actor } from './actors/entities/actor.entity';
// import { Movie } from './movies/entities/movies.entity';
// import { Review } from './reviews/entities/review.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ActorsModule } from './actors/actors.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      // entities: [Actor, Movie, Review],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          autoLoadEntities: true,
        };
      },
    }),
    MoviesModule,
    ReviewsModule,
    ActorsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

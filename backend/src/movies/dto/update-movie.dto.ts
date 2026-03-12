import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  director: string;

  @IsOptional()
  @IsNotEmpty()
  poster: string;

  @IsOptional()
  @IsDate()
  releaseDate: Date;

  //   actors: Actor;
}

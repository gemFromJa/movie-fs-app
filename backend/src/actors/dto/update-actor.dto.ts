import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { Gender } from './create-actor.dto';

export class UpdateActorDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: string;
}

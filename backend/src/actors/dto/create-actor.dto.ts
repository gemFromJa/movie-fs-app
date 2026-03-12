import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum Gender {
  MALE = 'm',
  FEMALE = 'f',
  OTHER = 'o',
}

export class CreateActorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: string;
}

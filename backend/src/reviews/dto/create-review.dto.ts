import { IsInt, Min, Max, IsString, IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  @Min(1)
  @Max(10)
  rating: number;

  @IsString()
  @IsNotEmpty()
  comment: string;
}

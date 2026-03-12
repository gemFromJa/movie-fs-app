import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  IsOptional,
} from 'class-validator';

export class UpdateReviewDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  rating?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  comment?: string;
}

import { Transform } from 'class-transformer';
// import { IsInt } from 'class-validator';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 10;

  @IsOptional()
  @Transform(({ value }) => String(value))
  search: string = '';

  get skip() {
    return (this.page - 1) * this.limit;
  }
}

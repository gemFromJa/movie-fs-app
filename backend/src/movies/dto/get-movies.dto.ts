import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/pagination.dto';

export class GetMoviesDto extends PaginationQueryDto {
  @Optional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  year?: Date;
}

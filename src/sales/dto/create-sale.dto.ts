import { IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  productId: number;

  @IsDateString()
  date: Date;

  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  middleName: string;
}

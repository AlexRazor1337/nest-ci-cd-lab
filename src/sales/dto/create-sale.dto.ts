import { IsNumber, IsDate, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  productId: number;

  @IsDate()
  date: Date;

  @IsString()
  lastName: string;

  @IsString()
  firstName: string;

  @IsString()
  middleName: string;
}

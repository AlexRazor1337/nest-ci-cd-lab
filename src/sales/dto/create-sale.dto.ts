import { IsNumber, IsDate, IsString } from 'class-validator';

export class CreateSaleDto {
  @IsNumber()
  productId: number;

  @IsDate()
  saleDate: Date;

  @IsString()
  customerLastName: string;

  @IsString()
  customerFirstName: string;

  @IsString()
  customerMiddleName: string;
}

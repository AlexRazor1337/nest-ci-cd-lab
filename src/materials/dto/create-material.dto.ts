import { IsString, IsNumber, IsNotEmpty, MinLength, Min } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  materialCode: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsNumber()
  @Min(0)
  pricePerGram: number;
}

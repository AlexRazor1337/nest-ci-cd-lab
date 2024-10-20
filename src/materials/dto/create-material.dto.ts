import { IsString, IsNumber, IsNotEmpty, MinLength, Min } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  material_code: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsNumber()
  @Min(0)
  price_per_gram: number;
}

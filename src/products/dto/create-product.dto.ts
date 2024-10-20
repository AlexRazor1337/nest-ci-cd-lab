import { IsString, IsNumber, IsEnum, IsNotEmpty, MinLength, Min, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductType } from '../product.entity';

class ProductMaterialDto {
  @IsNumber()
  materialId: number;

  @IsNumber()
  @Min(0)
  weightUsed: number;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  productCode: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsEnum(ProductType)
  type: ProductType;

  @IsNumber()
  @Min(0)
  totalWeight: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductMaterialDto)
  productMaterials: ProductMaterialDto[];
}

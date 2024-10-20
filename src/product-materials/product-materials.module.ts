import { Module } from '@nestjs/common';
import { ProductMaterialsService } from './product-materials.service';

@Module({
  providers: [ProductMaterialsService]
})
export class ProductMaterialsModule {}

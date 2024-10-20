import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductMaterial } from './product-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductMaterial])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}

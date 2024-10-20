import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MaterialsModule } from './materials/materials.module';
import { SalesModule } from './sales/sales.module';
import { ProductMaterialsModule } from './product-materials/product-materials.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), ProductsModule, MaterialsModule, SalesModule, ProductMaterialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

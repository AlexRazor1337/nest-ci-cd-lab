import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products/products.service';
import { MaterialsService } from './materials/materials.service';
import { SalesService } from './sales/sales.service';

@Controller()
export class AppController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly materialsService: MaterialsService,
    private readonly salesService: SalesService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const products = await this.productsService.findAll();
    const materials = await this.materialsService.findAll();
    const sales = await this.salesService.findAll();

    return { products, materials, sales };
  }
}

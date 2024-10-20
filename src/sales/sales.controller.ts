import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async create(@Body() saleData: any): Promise<any> {
    return this.salesService.create(saleData);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.salesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.salesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() saleData: any): Promise<any> {
    return this.salesService.update(id, saleData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.salesService.remove(id);
  }
}

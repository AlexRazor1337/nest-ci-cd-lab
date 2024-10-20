import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { Sale } from './sale.entity';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  async create(@Body() saleData: CreateSaleDto): Promise<Sale> {
    return this.salesService.create(saleData);
  }

  @Get()
  async findAll(): Promise<Sale[]> {
    return this.salesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Sale> {
    return this.salesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() saleData: UpdateSaleDto): Promise<Sale> {
    return this.salesService.update(id, saleData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.salesService.remove(id);
  }
}

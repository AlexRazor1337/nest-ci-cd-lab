import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly salesRepository: Repository<Sale>,
  ) {}

  async create(saleData: CreateSaleDto): Promise<Sale> {
    return this.salesRepository.save(saleData);
  }

  async findAll(): Promise<Sale[]> {
    return this.salesRepository.find();
  }

  async findOne(id: number): Promise<Sale> {
    return this.salesRepository.findOneByOrFail({ id });
  }

  async update(id: number, saleData: any): Promise<Sale> {
    const sale = await this.salesRepository.findOneByOrFail({ id });
    Object.assign(sale, saleData);
    return this.salesRepository.save(sale);
  }

  async remove(id: number): Promise<void> {
    await this.salesRepository.delete(id);
  }
}

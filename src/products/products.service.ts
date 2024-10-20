import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductMaterial } from './product-material.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(ProductMaterial)
    private productMaterialsRepository: Repository<ProductMaterial>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { productMaterials, ...productData } = createProductDto;
    const product = this.productsRepository.create(productData);
    await this.productsRepository.save(product);

    for (const materialData of productMaterials) {
      await this.productMaterialsRepository.save({
        product,
        material: { id: materialData.materialId },
        weightUsed: materialData.weightUsed,
      });
    }

    return this.findOne(product.id);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['productMaterials', 'productMaterials.material'] });
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneOrFail({
      where: { id },
      relations: ['productMaterials', 'productMaterials.material'],
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    await this.productsRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}

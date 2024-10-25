import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './material.entity';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
  ) {}

  create(createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialsRepository.save(createMaterialDto);
  }

  findAll(): Promise<Material[]> {
    return this.materialsRepository.find();
  }

  findOne(id: number): Promise<Material> {
    return this.materialsRepository.findOneOrFail({ where: { id: id } });
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto): Promise<Material> {
    await this.materialsRepository.update(id, updateMaterialDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    // Check if material has related products before deleting
    const material = await this.materialsRepository.findOne({
      where: { id },
      relations: ['productMaterials'],
    })

    if (material.productMaterials.length > 0) {
      throw new Error('Material has related products. Cannot delete.');
    }

    await this.materialsRepository.delete(id);
  }
}

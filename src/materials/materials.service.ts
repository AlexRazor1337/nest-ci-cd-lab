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
    return this.materialsRepository.findOneOrFail({ where: { material_id: id } });
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto): Promise<Material> {
    await this.materialsRepository.update(id, updateMaterialDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.materialsRepository.delete(id);
  }
}

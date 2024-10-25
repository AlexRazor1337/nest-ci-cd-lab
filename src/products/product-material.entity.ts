import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Material } from '../materials/material.entity';

@Entity()
export class ProductMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, product => product.productMaterials, {
    cascade: true,
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  product: Product;

  @ManyToOne(() => Material, material => material.productMaterials, {
    cascade: true,
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  material: Material;

  @Column('decimal', { precision: 10, scale: 2 })
  weightUsed: number;
}

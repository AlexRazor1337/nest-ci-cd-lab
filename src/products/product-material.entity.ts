import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
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
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Material, material => material.productMaterials, {
    cascade: true,
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'material_id' })
  material: Material;

  @Column('decimal', { precision: 10, scale: 2 })
  weightUsed: number;
}

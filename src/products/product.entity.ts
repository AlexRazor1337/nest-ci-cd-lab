import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Material } from '../materials/material.entity';
import { ProductMaterial } from 'src/product-materials/product-material.entity';

export enum ProductType {
  EARRINGS = 'earrings',
  RINGS = 'rings',
  BROOCHES = 'brooches',
  BRACELETS = 'bracelets',
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ unique: true })
  product_code: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ProductType,
  })
  type: ProductType;

  @Column('decimal', { precision: 10, scale: 2 })
  total_weight: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => ProductMaterial, productMaterial => productMaterial.product)
  productMaterials: ProductMaterial[];
}

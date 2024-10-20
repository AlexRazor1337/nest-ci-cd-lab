import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ProductMaterial } from 'src/products/product-material.entity';

export enum ProductType {
  EARRINGS = 'earrings',
  RINGS = 'rings',
  BROOCHES = 'brooches',
  BRACELETS = 'bracelets',
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  productCode: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ProductType,
  })
  type: ProductType;

  @Column('decimal', { precision: 10, scale: 2 })
  totalWeight: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => ProductMaterial, productMaterial => productMaterial.product)
  productMaterials: ProductMaterial[];
}

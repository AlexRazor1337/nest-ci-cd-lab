import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';
import { ProductMaterial } from 'src/products/product-material.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  material_id: number;

  @Column({ unique: true })
  material_code: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price_per_gram: number;

  @OneToMany(() => ProductMaterial, productMaterial => productMaterial.material)
  productMaterials: ProductMaterial[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductMaterial } from 'src/products/product-material.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  materialCode: string;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  pricePerGram: number;

  @OneToMany(
    () => ProductMaterial,
    (productMaterial) => productMaterial.material,
  )
  productMaterials: ProductMaterial[];
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  product: Product;

  @Column('date')
  date: Date;

  @Column()
  lastName: string;

  @Column()
  firstName: string;

  @Column()
  middleName: string;
}

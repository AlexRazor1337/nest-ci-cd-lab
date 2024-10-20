import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  sale_id: number;

  @ManyToOne(() => Product)
  product: Product;

  @Column('date')
  sale_date: Date;

  @Column()
  customer_last_name: string;

  @Column()
  customer_first_name: string;

  @Column()
  customer_middle_name: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';

export class UpdatSaleDto extends PartialType(CreateSaleDto) {}

import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';

@Module({
  providers: [MaterialsService]
})
export class MaterialsModule {}

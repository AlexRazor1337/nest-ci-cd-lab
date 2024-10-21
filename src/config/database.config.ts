import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/../*/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
  dropSchema: true,
  ssl: {
    rejectUnauthorized: false,
  }
};

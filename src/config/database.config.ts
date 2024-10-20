import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log(process.env.DATABASE_URL);
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
  ssl: {
    rejectUnauthorized: false,
  }
};

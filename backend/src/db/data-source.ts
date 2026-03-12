import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_DATABASE,
  // entities: [Movie, Review, Actor],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
});

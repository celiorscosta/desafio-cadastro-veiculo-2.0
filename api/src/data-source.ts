import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension'
import { MainSeeder } from './infra/seeds/MainSeeder';
const port = process.env.DB_PORT as unknown as number | undefined;

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/models/*.{ts,js}`],
    migrations: [`${__dirname}/**/infra/migrations/*.{ts,js}`],
    seeds: [MainSeeder]
};

export const AppDataSource = new DataSource(options);
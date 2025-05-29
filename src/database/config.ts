import dotenv from 'dotenv';
dotenv.config();

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mssql';
  use_env_variable?: string;
}

const config: { [key: string]: DBConfig } = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'mydb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};

export default config;

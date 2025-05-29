import { Dialect } from 'sequelize';

export = {
  development: {
    username: 'root',
    password: 'yourpassword',
    database: 'testdb',
    host: '127.0.0.1',
    dialect: 'mysql' as Dialect,
  }
};

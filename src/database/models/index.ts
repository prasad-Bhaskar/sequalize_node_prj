import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import configFile from '../config'; // Make sure this exports an object keyed by environments
import { initUserModel } from './user'; // Import init function from user model

// Environment setup
const env = (process.env.APP_ENV || 'development') as keyof typeof configFile;
const config = configFile[env];

const sequelize = new Sequelize(
  config.database as string,
  config.username as string,
  config.password as string,
  config
);

// Initialize models
const User = initUserModel(sequelize);

// Build DB object
const db = {
  sequelize,
  Sequelize,
  User,
};

// Run associations (if any)
if (User.associate) {
  User.associate(db);
}

// Export each model separately (optional) and the db
export { sequelize, User };
export default db;

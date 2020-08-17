import * as dotenv from 'dotenv';

const { config } = dotenv;

if (process.env.NODE_ENV !== 'production') {
  config();
}

export default {
  enviroment: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 5030,
    lang: process.env.LANG || 'en'
  },
  db: {
    name: process.env.DB_NAME as string,
    username: process.env.DB_USERNAME as string,
    pass: process.env.DB_PASSWORD as string,
    dialect: process.env.DB_DIALECT || 'postgres'
  }
};

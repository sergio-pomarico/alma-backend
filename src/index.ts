import { Sequelize } from 'sequelize';
import container from '@infrastructure/container/container';
import IConfig from '@infrastructure/config/config.interface';
import IServer from '@infrastructure/server/server.interface';

const server: IServer = container.resolve('app');
const config: IConfig = container.resolve('config');

class App {
  private server: IServer;
  private config: IConfig;

  constructor(server: IServer, config: IConfig) {
    this.server = server;
    this.config = config;
  }

  start() {
    this.connectDatabase();
    this.initServer();
  }

  async connectDatabase(): Promise<void> {
    const { db } = this.config;
    const sequelize = new Sequelize(db.name, db.username, db.pass, {
      dialect: db.dialect,
      define: {
        underscored: true
      }
    });

    /* eslint-disable no-console */
    try {
      await sequelize.sync({ force: false });
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  initServer() {
    this.server.start();
  }
}

const app = new App(server, config);

app.start();

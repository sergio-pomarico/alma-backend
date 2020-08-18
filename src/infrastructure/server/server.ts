import express, { Application } from 'express';
import IContainer from '../container/container.interface';
import IConfig from '../config/config.interface';

class Server {
  private _config: IConfig;
  private _app: Application;

  constructor({ config, router }: IContainer) {
    this._config = config;
    this._app = express().use(router);
  }

  async start(): Promise<void> {
    await this._app.listen(this._config.server.port);
    /* eslint-disable no-console */
    console.log(`App running in port ${this._config.server.port}`);
    /* eslint-enable no-console */
  }
}

export default Server;

import express, { Application } from 'express';
import IProxy from '../container/container.interface';
import IConfig from '../config/config.interface';

class Server {
  private _config: IConfig;
  private _app: Application;

  constructor({ config, router }: IProxy) {
    this._config = config;
    this._app = express().use(router);
  }

  start(): Promise<void> {
    return new Promise((resolve) => {
      this._app.listen(this._config.server.port, () => {
        console.log(`App running in port ${this._config.server.port}`);
        resolve();
      });
    });
  }
}

export default Server;

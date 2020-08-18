import { Router, Application } from 'express';
import IConfig from '../config/config.interface';
import IUserServices from '@application/user/user.services.interface';
import IUserController from '@adapters/controllers/user/user.controller.interface';

interface IContainer {
  router: Router;
  config: IConfig;
  app: Application;
  UserService: IUserServices;
  UserController: IUserController;
  UserRoutes: Router;
}

export default IContainer;

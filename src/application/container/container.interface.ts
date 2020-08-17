import { Router, Application } from 'express';
import IConfig from '../config/config.interface';
import IUserServices from '../../services/user/user.services.interface';
import IUserController from '../../controllers/user/user.controller.interface';

interface IContainer {
  router: Router;
  config: IConfig;
  app: Application;
  UserService: IUserServices;
  UserController: IUserController;
  UserRoutes: Router;
}

export default IContainer;

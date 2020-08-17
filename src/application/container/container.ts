import { createContainer, asClass, asValue, asFunction } from 'awilix';

import services from '../../services';
import controllers from '../../controllers';
import routes from '../../routes';
import config from '../config/config';
import app from '../server/server';

const { UserService } = services;
const { UserController } = controllers;
const { UserRoutes, AppRouter } = routes;

const container = createContainer();
container
  .register({
    router: asFunction(AppRouter).singleton(),
    config: asValue(config),
    app: asClass(app).singleton()
  })
  .register({
    // Services
    UserService: asClass(UserService).singleton(),
    // Controllers
    UserController: asClass(UserController.bind(UserController)).singleton(),
    // Routes
    UserRoutes: asFunction(UserRoutes).singleton()
  });

export default container;

import { Router, json } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import UserRoutes from './user';
import IContainer from '@infrastructure/container/container.interface';
import {
  NotFoundMiddlewares,
  ErrorMiddlewares
} from '@infrastructure/middlewares/error';

const AppRouter = ({ UserRoutes }: IContainer): Router => {
  const router = Router();
  const APIrouter = Router();

  APIrouter.use(cors()).use(helmet()).use(json()).use(compression());
  APIrouter.use('/user', UserRoutes);

  router.use('/v1/api', APIrouter);

  router.use(NotFoundMiddlewares);
  router.use(ErrorMiddlewares);

  return router;
};

export default {
  UserRoutes,
  AppRouter
};

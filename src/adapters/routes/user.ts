import { Router } from 'express';
import IContainer from '@infrastructure/container/container.interface';

const UserRoutes = ({ UserController }: IContainer): Router => {
  const router = Router();
  router.get('/', UserController.index);
  return router;
};

export default UserRoutes;

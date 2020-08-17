import { Router } from 'express';
import IProxy from '../application/container/container.interface';

const UserRoutes = ({ UserController }: IProxy): Router => {
  const router = Router();
  router.get('/', UserController.index);
  return router;
};

export default UserRoutes;

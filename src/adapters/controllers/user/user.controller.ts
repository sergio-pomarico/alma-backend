import { Response, Request } from 'express';
import IContainer from '@infrastructure/container/container.interface';
import IUserServices from '@application/user/user.services.interface';

let _userService: IUserServices;

class UserController {
  constructor({ UserService }: IContainer) {
    _userService = UserService;
  }

  index(req: Request, res: Response): Response {
    return res.send(_userService.index());
  }
}

export default UserController;

import { Request, Response, Router } from 'express';
import StatusCodes from 'http-status-codes';
import {
  cookieProps,
} from '@shared/constants';
const LogOutRouter = Router();
const {OK} = StatusCodes;

/******************************************************************************
 *                      Logout - "GET /logout"
 ******************************************************************************/

LogOutRouter.get('/', (req: Request, res: Response) => {
  const { key, options } = cookieProps;
  res.clearCookie(key, options);
  return res.status(OK).end();
});

export default LogOutRouter;


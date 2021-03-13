import { Request, Response, NextFunction, Router } from 'express';
import StatusCodes from 'http-status-codes';
import { JwtService } from '@shared/JwtService';
import { ErrorWithStatus } from '@shared/functions';
import {
  paramMissingError,
  loginFailedError,
  namePassMissingError,
  dbError,
  cookieProps,
  IRequest,
} from '@shared/constants';
import Admin from '../models/admin';

const LoginRouter = Router();
const jwtService = new JwtService();
const { BAD_REQUEST, OK, UNAUTHORIZED, INTERNAL_SERVER_ERROR } = StatusCodes;

/******************************************************************************
 *                      Login User - "POST /login"
 ******************************************************************************/

LoginRouter.post(
  '/login',
  (req: IRequest, res: Response, next: NextFunction) => {
    const { name, password } = req.body;

    if (!(name && password)) {
      const err = new ErrorWithStatus(BAD_REQUEST, namePassMissingError);
      return next(err);
    }

    Admin.findOne({ name })
      .then((admin) => {
        // Check admin in DB
        if (!admin) {
          const err = new ErrorWithStatus(UNAUTHORIZED, loginFailedError);
          return next(err);
        }
        //Check password
        if (admin.password !== password) {
          const err = new ErrorWithStatus(UNAUTHORIZED, loginFailedError);
          return next(err);
        }

        // Setup Admin Cookie
        jwtService
          .getJwt({
            id: admin.id,
          })
          .then((jwt) => {
            const { key, options } = cookieProps;
            res.cookie(key, jwt, options);
            return res.status(OK).end();
          });
      })
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        next(err);
      });
  }
);

/******************************************************************************
 *                      Logout - "GET /logout"
 ******************************************************************************/

LoginRouter.get('/logout', (req: Request, res: Response) => {
  const { key, options } = cookieProps;
  res.clearCookie(key, options);
  return res.status(OK).end();
});

export default LoginRouter;
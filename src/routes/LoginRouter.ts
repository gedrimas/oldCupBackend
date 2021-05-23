import { Request, Response, NextFunction, Router } from 'express';
import StatusCodes from 'http-status-codes';
import { JwtService } from '@shared/JwtService';
import { ErrorWithStatus } from '@shared/functions';
import {
  loginFailedError,
  namePassMissingError,
  cookieProps,
} from '@shared/constants';
import Admin from '../models/admin';

const LoginRouter = Router();
const jwtService = new JwtService();
const { BAD_REQUEST, OK, UNAUTHORIZED, INTERNAL_SERVER_ERROR } = StatusCodes;

/******************************************************************************
 *                      Login User - "POST /login"
 ******************************************************************************/

LoginRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;

  // Check if name and password provided
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
});

export default LoginRouter;


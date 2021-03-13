import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import { JwtService } from '@shared/JwtService';
import {
  paramMissingError,
  cookieProps,
  IRequest,
  notFound,
} from '@shared/constants';
import Admin from '../models/admin';
import Section from '../models/section';
import { adminMW } from './middleware';
import { ErrorWithStatus } from '@shared/functions';

const LoginRouter = Router();
const SectionRouter = Router();
const jwtService = new JwtService();
const {
  BAD_REQUEST,
  OK,
  UNAUTHORIZED,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} = StatusCodes;

/******************************************************************************
 *                      Section - "GET /section"
 ******************************************************************************/

SectionRouter.route('/section')
  .get((req: Request, res: Response, next: NextFunction) => {
    Section.find({})
      .then((allSections) => {
        if (!allSections) {
          const err = new ErrorWithStatus(NOT_FOUND, notFound);
          return next(err);
        }
        return res.status(OK).json({ allSections });
      })
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        return next(err);
      });
  })
  .post(adminMW, async (req: Request, res: Response) => {
    await Section.create(req.body);
    return res.status(OK).end();
  });

export default SectionRouter;

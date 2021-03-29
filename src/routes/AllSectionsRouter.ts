import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';

import { notFound } from '@shared/constants';
import Section from '../models/section';
import { ErrorWithStatus } from '@shared/functions';

const AllSectionsRouter = Router();

const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

AllSectionsRouter
  /******************************************************************************
   *                      Sections - "GET /sections"
   ******************************************************************************/
  .get('/', (req: Request, res: Response, next: NextFunction) => {
    Section.find({})
      .then((allsections) => {
        //Sections not found
        if (!allsections) {
          const err = new ErrorWithStatus(NOT_FOUND, notFound);
          return next(err);
        }
        // Send sections to a client
        return res.status(OK).json({ allsections });
      })
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        return next(err);
      });
  });

export default AllSectionsRouter;

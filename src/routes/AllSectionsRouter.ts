import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import {
  notFound,
  sectionAddingError,
  sectionUpdatingError,
} from '@shared/constants';
import Section from '../models/section';
import { adminMW } from './middleware';
import { ErrorWithStatus, updateIfNewValueProvided } from '@shared/functions';

const AllSectionsRouter = Router();

const {
  OK,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  CREATED,
  NOT_IMPLEMENTED,
} = StatusCodes;

AllSectionsRouter
  /******************************************************************************
   *                      Sections - "GET /sections"
   ******************************************************************************/
  .get('/', (req: Request, res: Response, next: NextFunction) => {
    Section.find({})
      .then((allSections) => {
        //Sections not found
        if (!allSections) {
          const err = new ErrorWithStatus(NOT_FOUND, notFound);
          return next(err);
        }
        // Send sections to a client
        return res.status(OK).json({ allSections });
      })
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        return next(err);
      });
  });

export default AllSectionsRouter;

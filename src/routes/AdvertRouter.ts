import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import {
  notFound,
  sectionAddingError,
  sectionUpdatingError,
} from '@shared/constants';
import Advert from '../models/advert';
import { ErrorWithStatus, updateIfNewValueProvided } from '@shared/functions';

const AdvertRouter = Router();
const {
  OK,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  CREATED,
  NOT_IMPLEMENTED,
} = StatusCodes;

AdvertRouter.route('/advert')
  /******************************************************************************
   *                      Section - "GET /section"
   ******************************************************************************/
  .get((req: Request, res: Response, next: NextFunction) => {
    Advert.find({ sectionId: req.body.sectionId })
      .then((allAdverts) => {
        //Sections not found
        if (!allAdverts) {
          const err = new ErrorWithStatus(NOT_FOUND, notFound);
          return next(err);
        }
        // Send sections to a client
        return res.status(OK).json({ allAdverts });
      })
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        return next(err);
      });
  });
/******************************************************************************
 *                      Section - "POST /section"
 ******************************************************************************/

/******************************************************************************
 *                      Section - "PUT /section"
 ******************************************************************************/

export default AdvertRouter;

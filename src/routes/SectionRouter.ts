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

const SectionRouter = Router();
const {
  OK,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  CREATED,
  NOT_IMPLEMENTED,
} = StatusCodes;

SectionRouter.route('/section')
  /******************************************************************************
   *                      Section - "GET /section"
   ******************************************************************************/
  .get((req: Request, res: Response, next: NextFunction) => {
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
  })
  /******************************************************************************
   *                      Section - "POST /section"
   ******************************************************************************/
  .post(adminMW, (req: Request, res: Response, next: NextFunction) => {
    //Create new section
    Section.create(req.body)
      .then(() => {
        //Send status OK if created
        return res.status(CREATED).end();
      })
      .catch(() => {
        const err = new ErrorWithStatus(NOT_IMPLEMENTED, sectionAddingError);
        return next(err);
      });
  })
  /******************************************************************************
   *                      Section - "PUT /section"
   ******************************************************************************/
  .put(adminMW, (req: Request, res: Response, next: NextFunction) => {
    //Find and update section
    Section.findByIdAndUpdate(req.body.sectionId, {
      $set: updateIfNewValueProvided(req.body.ru, req.body.ee),
    })
      .then(() => {
        return res.status(OK).end();
      })
      .catch(() => {
        const err = new ErrorWithStatus(NOT_IMPLEMENTED, sectionUpdatingError);
        return next(err);
      });
  });

export default SectionRouter;

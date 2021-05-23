import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import { 
  sectionAddingError, 
  sectionUpdatingError, 
  sectionAndAdvertsDeletionError 
} from '@shared/constants';
import Section from '../models/section';
import Advert from '../models/advert';
import { adminMW } from './middleware';
import { ErrorWithStatus, updateIfNewValueProvided } from '@shared/functions';

const SectionRouter = Router();

const { OK, CREATED, NOT_IMPLEMENTED } = StatusCodes;

/******************************************************************************
 *                      Section - "POST /section"
 ******************************************************************************/
SectionRouter.route('/')
  .post(adminMW, (req: Request, res: Response, next: NextFunction) => {
    //Create new section
    Section.create(req.body)
      .then(() => {
        //Send status OK if created
        return res.status(CREATED).end();
      })
      .catch(() => {
        //Return Error if section isn't created
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
        //Return Error if section wasn't updated
        const err = new ErrorWithStatus(NOT_IMPLEMENTED, sectionUpdatingError);
        return next(err);
      });
  })
    /******************************************************************************
   *       Section - "Delete sectins and all adverts in that sectin/section"
   ******************************************************************************/
     .delete(adminMW, (req: Request, res: Response, next: NextFunction) => {
      //Find and delete related adverts
      Advert.deleteMany({
        sectionId: req.body.sectionId
      })
        .then(() => {
          //Find and delete section
          Section.deleteOne({_id: req.body.sectionId})
            .then(() => {
              return res.status(OK).end();
            })
        })
        .catch(() => {
          //Return Error if section and adverts wasn't deleted 
          const err = new ErrorWithStatus(NOT_IMPLEMENTED, sectionAndAdvertsDeletionError);
          return next(err);
        });
    })


export default SectionRouter;

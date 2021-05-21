import { Request, Response, Router, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';

import {
  notFound,
  sectionAddingError,
  sectionUpdatingError,
} from '@shared/constants';
import Contacts from '../models/contacts';
import { adminMW } from './middleware';
import { ErrorWithStatus, updateIfNewValueProvided } from '@shared/functions';

const ContactsRouter = Router();
const {
  OK,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  CREATED,
  NOT_IMPLEMENTED,
} = StatusCodes;

ContactsRouter.route('/')
  /******************************************************************************
   *                      Contacts - "GET /contacts"
   ******************************************************************************/
  .get((req: Request, res: Response, next: NextFunction) => {
    //Find contacts
    Contacts.find({})
      .then((contacts) => {
        //Contacts not found
        if (!contacts) {
          const err = new ErrorWithStatus(NOT_FOUND, notFound);
          return next(err);
        }
        // Send contacts to a client
        return res.status(OK).json({ contacts });
      })
      //Return Error
      .catch((error) => {
        const err = new ErrorWithStatus(INTERNAL_SERVER_ERROR, error.message);
        return next(err);
      });
  })
  /******************************************************************************
   *                      Contacts - "POST /contacts"
   ******************************************************************************/
  .post(adminMW, (req: Request, res: Response, next: NextFunction) => {
    //Create contact
    Contacts.create(req.body)
      .then(() => {
        //Send status OK if created
        return res.status(CREATED).end();
      })
      //Return Error with appropriate messege
      .catch(() => {
        const err = new ErrorWithStatus(NOT_IMPLEMENTED, sectionAddingError);
        return next(err);
      });
  })
  /******************************************************************************
   *                      Contacts - "PUT /contacts"
   ******************************************************************************/
  .put(adminMW, (req: Request, res: Response, next: NextFunction) => {
    //Find and update section
    console.log('req', req);
    
    // Contacts.findByIdAndUpdate(req.body.sectionId, {
    //   $set: updateIfNewValueProvided(req.body.ru, req.body.ee),
    // })

    Contacts.updateOne({_id: req.body.ru}, 
      {
      ru: req.body.ru,
      ee: req.body.ee, 
      phone: req.body.phone, 
      email: req.body.email, 

      }
    )
      //Send status OK if updated
      .then(() => {
        return res.status(OK).end();
      })
      //Return Error with appropriate messege
      .catch(() => {
        const err = new ErrorWithStatus(NOT_IMPLEMENTED, 'sectionUpdatingError');
        return next(err);
      });
  });

export default ContactsRouter;

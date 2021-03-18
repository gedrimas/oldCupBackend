import express, {
  Response,
  NextFunction,
  Router,
  Express,
  Request,
} from 'express';
import multer, { FileFilterCallback } from 'multer';
import { adminMW } from './middleware';
import Advert from '../models/advert';

interface MyCallBack extends FileFilterCallback {
  (err: null | Error, mark: boolean): void;
}

//is image file
const imageFileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: MyCallBack
) => {
  const fileName = file.originalname ?? false;
  if (!fileName) return;
  const search = /\.(jpg|jpeg|png|gif)$/;
  if (!search.exec(fileName)) {
    return cb(new Error('You can upload only image files!'), false);
  }
  cb(null, true);
};

const upload = multer({
  dest: __dirname + '../../public/images/',
  fileFilter: imageFileFilter,
});

const UploadRouter = express.Router();

UploadRouter.route('/upload').post(
  adminMW,
  upload.array('avatar', 5),
  (req: Request, res: Response, next: NextFunction) => {
    Advert.create({
      sectionId: req.body.sectionId,
      price: req.body.price,
      descriptionRu: req.body.descriptionRu,
      descriptionEe: req.body.descriptionEe,
      images: req.files,
    });

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.files);
  }
);

export default UploadRouter;

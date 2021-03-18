import logger from './Logger';

export const pErr = (err: Error) => {
  if (err) {
    logger.err(err);
  }
};

export const getRandomInt = () => {
  return Math.floor(Math.random() * 1_000_000_000_000);
};

export class MyError extends Error {
  status = 500;
}
export class ErrorWithStatus {
  err: MyError;
  constructor(public status: number, public message: string) {
    this.err = new MyError(message);
    this.err.status = status;
  }
}

export const updateIfNewValueProvided = (ru: string, ee: string) => {
  if (!(ru || ee)) {
    return undefined;
  }
  if (ru && ee) {
    return {
      ru,
      ee,
    };
  }
  if (ru) return { ru };
  if (ee) return { ee };
};

interface ImageMetaData {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

// export function idImageMetaData(
//   img: { [fieldname: string]: File[] } | File[]
// ): img is File[] {
//   return (img as File[])[0].path !== undefined;
// }

// export function getImagePaths(
//   images: ImageMetaData[] | { [fieldname: string]: File[] } | File[]
// ) {
//   if (idImageMetaData(images)) {
//     return images.map((img) => img.path);
//   }
// }

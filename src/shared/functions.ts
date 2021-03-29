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

//returns object for saving in DB according provided params
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

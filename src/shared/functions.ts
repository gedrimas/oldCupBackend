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

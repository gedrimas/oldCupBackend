import { Request } from 'express';
import { IUser } from '@entities/User';

// Strings
export const paramMissingError =
  'One or more of the required parameters was missing.';
export const loginFailedError = 'Login failed';
export const namePassMissingError = 'Name or password was missing.';
export const dbError = 'Data base Error';
export const notFound = 'Not found';

// Numbers
export const pwdSaltRounds = 12;

// Cookie Properties
export const cookieProps = Object.freeze({
  key: 'ExpressGeneratorTs',
  secret: process.env.COOKIE_SECRET,
  options: {
    httpOnly: true,
    signed: true,
    path: process.env.COOKIE_PATH,
    maxAge: Number(process.env.COOKIE_EXP),
    domain: process.env.COOKIE_DOMAIN,
    secure: process.env.SECURE_COOKIE === 'true',
  },
});

// IRequest object for express routes
export interface IRequest extends Request {
  body: {
    user: IUser;
    name: string;
    password: string;
  };
}

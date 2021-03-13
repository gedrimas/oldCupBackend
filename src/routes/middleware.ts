import StatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { cookieProps } from '@shared/constants';
import { JwtService } from '@shared/JwtService';

const jwtService = new JwtService();
const { UNAUTHORIZED } = StatusCodes;

// Middleware to verify JWT
export const adminMW = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get json-web-token
    const jwt = req.signedCookies[cookieProps.key];
    if (!jwt) {
      throw Error('JWT not present in signed cookie!!!');
    }
    // Check JWT
    await jwtService.decodeJwt(jwt);
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({
      error: err.message,
    });
  }
};

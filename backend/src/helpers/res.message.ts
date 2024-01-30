import { Response } from 'express';

export const resMessage = (
  res: Response,
  statusCode: number,
  status: string,
  message: string,
  data: any
) => {
  res.status(statusCode).json({
    status,
    message,
    data,
  });
};

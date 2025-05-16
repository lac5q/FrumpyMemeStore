import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorRequestHandler } from 'express';

// Express middleware for error handling
export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error('API Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    error: {
      message,
      status: statusCode
    }
  });
};

// Next.js API route error handler
export const handleApiError = (err: any, res: NextApiResponse) => {
  console.error('API Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    error: {
      message,
      status: statusCode
    }
  });
};

export default errorMiddleware;

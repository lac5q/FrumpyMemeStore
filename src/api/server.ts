import express from 'express';
import { createServer } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

// Import route handlers
import shopifyRoutes from './routes/shopify';
import podRoutes from './routes/pod';
import authRoutes from './routes/auth';

// Import middleware
import errorMiddleware from './middleware/error';

// Create Express instance to be used in API routes
export const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Apply routes
app.use('/api/shopify', shopifyRoutes);
app.use('/api/pod', podRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API Gateway is running' });
});

// Apply error handling middleware
app.use(errorMiddleware);

// Helper function to create a standalone server (for development)
export const createApiServer = (port = 3001) => {
  const server = createServer(app);
  server.listen(port, () => {
    console.log(`API server running on port ${port}`);
  });
  return server;
};

// Helper function for Next.js API routes
export const apiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    app(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default app;

// API route handler for Next.js
import { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '@/api/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return apiHandler(req, res);
}

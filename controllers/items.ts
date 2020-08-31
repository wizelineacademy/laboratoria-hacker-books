import { NextApiRequest, NextApiResponse } from 'next';

import monk from 'monk';
import { getDBURI } from '../utils/config';

const db = monk(getDBURI());

const testCollection = db.get('test');

export const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const items = await testCollection.find({});

  return res.json({ items });
}
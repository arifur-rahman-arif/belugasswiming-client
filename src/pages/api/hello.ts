// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

/**
 * Sample API in next js
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse<Data>} res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ name: 'John Doe' });
}

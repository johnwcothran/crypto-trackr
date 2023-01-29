import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { config } from 'server/config/env';
import { CryptoDetailSchema, LatestSchema } from 'server/api/crypto/schemas';
import { ZodError } from 'zod';
import { latestCryptoMock } from 'server/api/crypto/mockResponse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cryptoSlug, interval } = req.query;
    const cryptoHistory = await fetch(`https://api.coincap.io/v2/assets/${cryptoSlug}/history?interval=${interval ?? 'd1'}`)
      .then(r => r.json());
    const history = cryptoHistory.data.sort((a: any, b: any) => b.time - a.time).map((c: any) => {
      return {
        x: c.date,
        y: parseFloat(c.priceUsd)
      }
    });

    // .catch(e => {
    //     if (e instanceof ZodError) {
    //         console.error(e.issues.map(issue => issue.path))
    //         return
    //     }
    // });
    
    res.status(200).json({history});
  }
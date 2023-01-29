import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { config } from 'server/config/env';
import { LatestSchema } from 'server/api/crypto/schemas';
import { ZodError } from 'zod';
import { latestCryptoMock } from 'server/api/crypto/mockResponse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const topCryptos = await fetch(`${config.COIN_MARKET_CAP_URL}/v1/cryptocurrency/listings/latest`, {
    //     headers: {
    //         'X-CMC_PRO_API_KEY': config.COIN_MARKET_CAP_API_KEY
    //     }
    // }).then(r => r.json()).catch(e => {
    //     // console.log('ZodError', e instanceof ZodError)
    //     if (e instanceof ZodError) {
    //         console.error(e.issues.map(issue => issue.path))
    //         return
    //     }
    //     // console.error(JSON.stringify(e));
    // });
    const topCryptos = await fetch(`https://api.coincap.io/v2/assets`).then(r => r.json());
    // const topCryptos = await latestCryptoMock;
    const response = LatestSchema.parse(topCryptos);
    res.status(200).json(response)
  }
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { config } from 'server/config/env';
import { CryptoDetailSchema, LatestSchema } from 'server/api/crypto/schemas';
import { ZodError } from 'zod';
import { latestCryptoMock } from 'server/api/crypto/mockResponse';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cryptoSlug } = req.query;
    const cryptoDetail = await fetch(`https://api.coincap.io/v2/assets`).then(r => r.json()).then(r => CryptoDetailSchema.parse(r));
    const asset = cryptoDetail.data.find(crypto => crypto.id === cryptoSlug)
    console.log(cryptoSlug, cryptoDetail)
    if (!asset) throw new Error('Cannot find asset');
    const rankInt = parseInt(asset.rank);
    const rankWindow = rankInt < 6 ? [1, 10] : [rankInt - 5, rankInt + 4];

    const similarAssets = cryptoDetail.data
        .filter((crypto) => {
            const parsedRank = parseInt(crypto.rank);
            return (parsedRank !== rankInt) && (parsedRank >= rankWindow[0] && parsedRank <= rankWindow[1])
        });
    // .catch(e => {
    //     if (e instanceof ZodError) {
    //         console.error(e.issues.map(issue => issue.path))
    //         return
    //     }
    // });
    
    res.status(200).json({
        similarAssets, 
        cryptoDetail: {
            data: asset,
            timestamp: cryptoDetail.timestamp
        }});
  }
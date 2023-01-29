import { z } from 'zod';

const StatusSchema = z.object({
    timestamp:     z.string(),
    error_code:    z.number(),
    error_message: z.string().nullable(),
    elapsed:       z.number(),
    credit_count:  z.number(),
    notice:        z.any().nullable(),
    total_count:   z.number()
});

export const CryptoSummarySchema = z.object({
    id:   z.number(),
    name: z.string(),
    symbol: z.string(),
    slug: z.string(),
    num_market_pairs: z.number(),
    date_added: z.string(),
    tags: z.array(z.string()),
    max_supply: z.number().nullable(),
    circulation_supply: z.number().optional(),
    platform: z.any().nullable(),
    cmc_rank: z.number(),
    self_reported_circulating_supply: z.any().nullable(),
    self_reported_market_cap: z.any().nullable(),
    tvl_ratio: z.any().nullable(),
    last_updated: z.string(),
    quote: z.object({
        USD: z.object({
            price: z.number(),
            volume_24h: z.number(),
            volume_change_24h: z.number(),
            percent_change_1h: z.number(),
            percent_change_24h: z.number(),
            percent_change_7d: z.number(),
            percent_change_30d: z.number(),
            percent_change_60d: z.number(),
            percent_change_90d: z.number(),
            market_cap: z.number(),
            market_cap_dominance: z.number(),
            fully_diluted_market_cap: z.number(),
            tvl: z.any().nullable(),
            last_updated: z.string(),
        })
    })

});

export const CryptoAssetDetailSchema = z.object({
    id: z.string(),
    rank: z.string(),
    symbol: z.string(),
    name: z.string(),
    supply: z.string(),
    maxSupply: z.string().nullable(),
    marketCapUsd: z.string(),
    volumeUsd24Hr: z.string(),
    priceUsd: z.string(),
    changePercent24Hr: z.string(),
    vwap24Hr: z.string().nullable(),
    explorer: z.string().nullable(),
});

export const LatestSchema = z.object({
    // status: StatusSchema,
    timestamp: z.number(),
    data: z.array(CryptoAssetDetailSchema)
});

export const CryptoAssetSchema = z.object({
    data: CryptoAssetDetailSchema,
    timestamp: z.number()
})

export const CryptoDetailSchema = z.object({
    data: z.array(
        CryptoAssetDetailSchema
    ),
    timestamp: z.number()
})


import { z } from 'zod';

const serverConfigSchema = z.object({
    COIN_MARKET_CAP_API_KEY: z.string({
        required_error: "COIN_MARKET_CAP_API_KEY env variable is required",
        invalid_type_error: "COIN_MARKET_CAP_API_KEY env variable must be a string",
    }),
    COIN_MARKET_CAP_URL: z.string({
        required_error: "COIN_MARKET_CAP_URL env variable is required",
        invalid_type_error: "COIN_MARKET_CAP_URL env variable must be a string",
    }),
});

export const config = serverConfigSchema.parse({...process.env});
import { rest } from 'msw'
import { bitcoinDetailMock, bitcoinHistoryMock, cryptoMock } from './mocks'
export const handlers = [
    // Handles a GET /api/crypto/bitcoin/history request
    rest.get('/api/crypto/bitcoin/history', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(bitcoinHistoryMock)
        );
    }),
    // Handles a GET /api/crypto/bitcoin/detail request
    rest.get('/api/crypto/bitcoin/detail', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(bitcoinDetailMock)
        );
    }),
    rest.get('/api/crypto', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(cryptoMock)
        );
    })
]
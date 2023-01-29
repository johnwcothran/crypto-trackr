import { latestCryptoMock } from "../../server/api/crypto/mockResponse"

export const getCoinMarketCapIdBySymbol = ({cryptoSymbol}: {cryptoSymbol: string | undefined}) => {
    type CryptoType = typeof latestCryptoMock.data[0] | undefined;
    const crypto = latestCryptoMock.data.find(crypto => crypto.symbol === cryptoSymbol) as CryptoType;
    if (!crypto) return {};
    const { id, symbol } = crypto;
    return {
        id,
        symbol
    };
}



import Link from "next/link"
import { CryptoAssetDetailSchema, CryptoAssetSchema } from "server/api/crypto/schemas"
import { getCoinMarketCapIdBySymbol } from "@/utils/crypto/utils"
import { z } from "zod"
import { CryptoCard } from "../../TopCryptos/CryptoCard"

type Props = {
    similarAssets: z.infer<typeof CryptoAssetDetailSchema>[],
    crypto: any
}
export const CryptoLeftColumn = ({ crypto, similarAssets }: Props) => {
    return (
        <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-orange-400">
                <CryptoCard {...{ crypto: crypto! }} />
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow mb-4">
                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span className="text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </span>
                    <span data-testid="similar-cryptos-title" className="tracking-wide">Similar Cryptos</span>
                </div>

                <div className="grid grid-cols-3">

                    {similarAssets.map((asset) => {
                        const id = getCoinMarketCapIdBySymbol({ cryptoSymbol: asset.symbol }).id
                        return (
                            <Link data-testid='similar-crypto' key={asset.id} href={`/${asset.id}`}>
                                <div className="text-center my-2">
                                    <img
                                        className="h-12 w-12 rounded-full mx-auto"
                                        // height='28' width='28'
                                        src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`}
                                        alt={asset.symbol} />
                                    <span className="text-main-color">{asset.name}</span>
                                </div>
                            </Link>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
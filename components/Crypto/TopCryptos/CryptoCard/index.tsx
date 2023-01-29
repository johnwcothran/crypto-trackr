import { z } from "zod";
import { CryptoAssetDetailSchema, CryptoSummarySchema } from "server/api/crypto/schemas"
import Link from "next/link";
import { getCoinMarketCapIdBySymbol } from "@/utils/crypto/utils";

export type CryptoType = Pick<
        z.infer<typeof CryptoAssetDetailSchema>,
        "id" | "name" | "symbol" | "priceUsd" | "changePercent24Hr"
    >

type Props = {
    crypto: CryptoType;
    card?: boolean;
};

export const CryptoCard = ({ crypto, card=false }: Props) => {
    const changePercent24Hr = parseFloat(crypto.changePercent24Hr);
    return (
    <Link className={`col-span-12 sm:col-span-6 md:col-span-3`.concat(card ? " shadow-sm bg-white" : "")} href={`/${crypto.id}`}>
        <div data-testid="crypto-card" className="flex flex-row p-4">
            <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="inline-block rounded-full text-white 
                                            bg-indigo-400
                                                text-xs font-bold 
                                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                            <div className='flex gap-2 items-center'>
                                <img height='20' width='20' src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${getCoinMarketCapIdBySymbol({cryptoSymbol: crypto.symbol}).id}.png`} alt={crypto.symbol} />
                                {crypto.symbol}
                            </div>
                        </div>
                    </div>
                </div>
                <small className="text-gray-400">{crypto.name}</small>
                <div data-testid="crypto-price" className="font-bold text-lg">{new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(parseFloat(crypto.priceUsd))}</div>
                <span className={`flex ${changePercent24Hr > 0 ? "text-green-600" : 'text-red-600'}`}>
                    {changePercent24Hr > 0 &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                    }
                    {changePercent24Hr < 0 &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                    }
                    {changePercent24Hr.toFixed(4)}%</span>
            </div>
        </div>
    </Link>
)}
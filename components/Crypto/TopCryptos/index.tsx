import { useQuery } from '@tanstack/react-query'
import { LatestSchema } from '@/server/api/crypto/schemas';
import { CryptoCard } from './CryptoCard';

export const TopCrypto = () => {
    const { data } = useQuery(['topCrypto'], {
        queryFn: () => fetch('/api/crypto').then(r => r.json()).then(r => LatestSchema.parse(r))
    });
    return (

        <div className="p-4 w-full">
            <h1 className={`font-semibold text-lg`}>Top Cryptos</h1>
            <div className="grid grid-cols-12 gap-4">
                {data?.data.slice(0, 12).map(crypto => (
                    <CryptoCard key={crypto.id} {...{ crypto, card: true }} />
                ))}
            </div>
        </div>

    )
}
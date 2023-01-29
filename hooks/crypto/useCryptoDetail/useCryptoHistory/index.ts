import { CryptoType } from "@/components/Crypto/TopCryptos/CryptoCard";
import { useQuery } from "@tanstack/react-query";
// import { CryptoDetailSchema } from "server/api/crypto/schemas";
// import { getCoinMarketCapIdBySymbol } from "../../../../utils/crypto/utils";
import { z } from "zod";

type Props = {
    cryptoSlug: string;
    interval: string;
}

export const useCryptoHistory = ({ cryptoSlug, interval }: Props) => {
    type CryptoHistoryType = {
        history: { x: string, y: number }[]
      }
      const { data: cryptoHistoryData, isLoading: cryptoHistoryIsLoading, isSuccess: cryptoHistoryIsSuccess, isError: cryptoHistoryIsError } = useQuery<CryptoHistoryType>(['cryptoHistory', cryptoSlug, interval], {
        queryFn: () => fetch(`/api/crypto/${cryptoSlug}/history?interval=${interval}`).then(r => r.json()),
        staleTime: 1 * (60 * 1000)
      });
      console.log(cryptoHistoryData);
    return {
        cryptoHistoryData,
        cryptoHistoryIsLoading,
        cryptoHistoryIsSuccess,
        cryptoHistoryIsError
    }
}
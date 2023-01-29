import { CryptoType } from "@/components/Crypto/TopCryptos/CryptoCard";
import { useQuery } from "@tanstack/react-query";
import { CryptoAssetDetailSchema, CryptoAssetSchema } from "@/server/api/crypto/schemas";
import { getCoinMarketCapIdBySymbol } from "@/utils/crypto/utils";
import { z } from "zod";
import { useCryptoHistory } from "./useCryptoHistory";

type Props = {
  cryptoSlug: string;
  interval: string | undefined;
}

export const  useCryptoDetails = ({ cryptoSlug, interval = 'd1' }: Props) => {

  type CryptoDetailType = {
    cryptoDetail: z.infer<typeof CryptoAssetSchema>,
    similarAssets: z.infer<typeof CryptoAssetDetailSchema>[]
  }
  const { data: cryptoDetailData, isSuccess: cryptoDetailIsSuccess, isError: cryptoDetailIsError } = useQuery<CryptoDetailType>(['cryptoDetail', cryptoSlug], {
    queryFn: () => fetch(` /api/crypto/${cryptoSlug}/detail?interval=${interval}`).then(r => r.json()),
    staleTime: 1 * (60 * 1000)
  });
  const cryptoHistory = useCryptoHistory({ cryptoSlug, interval });
  const crypto = cryptoDetailData?.cryptoDetail.data;

  return {
    ...cryptoHistory,
    crypto,
    cryptoDetailData,
    cryptoDetailIsSuccess,
    cryptoDetailIsError,
  }
}
import { CryptoDetailPage } from '@/components/Crypto/CryptoDetailPage';
import { TopCrypto } from '@/components/Crypto/TopCryptos'
import { CryptoCard, CryptoType } from '@/components/Crypto/TopCryptos/CryptoCard';
import { ChartControls } from '@/components/Crypto/TopCryptos/CryptoHistory/ChartControls';
import { BaseLayout } from '@/components/Layout/Base'
import { useQuery } from '@tanstack/react-query';
import { useCryptoDetails } from 'hooks/crypto/useCryptoDetail';
import { useRouter } from 'next/router'
import { CryptoDetailSchema } from 'server/api/crypto/schemas';
import { getCoinMarketCapIdBySymbol } from 'utils/crypto/utils';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryScatter, VictoryTooltip } from 'victory';
import { z } from 'zod';
// import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  const router = useRouter();
  const { cryptoSlug, interval } = router.query;
  return (
    <BaseLayout>
      <CryptoDetailPage {...{cryptoSlug, interval}} />
    </BaseLayout>
  )
}

import { TopCrypto } from '@/components/Crypto/TopCryptos'
import { BaseLayout } from '@/components/Layout/Base'
// import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  
  return (
    <BaseLayout>
      <TopCrypto />
    </BaseLayout>
  )
}

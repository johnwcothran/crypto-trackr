

import { ChartControls } from '@/components/Crypto/TopCryptos/CryptoHistory/ChartControls';
import { useCryptoDetails } from '@/hooks/crypto/useCryptoDetail';
import { useRouter } from 'next/router'
import { VictoryArea, VictoryAxis, VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryScatter, VictoryTooltip } from 'victory';

import { ChartLoading } from './ChartLoading';
import { CryptoLeftColumn } from './LeftColumn';


type Props = {
    cryptoSlug: string | string[] | undefined;
    interval:  string | string[] | undefined;
}
export const CryptoDetailPage = ({ cryptoSlug, interval }: Props) => {
    const {
        cryptoDetailData,
        cryptoHistoryData,
        crypto,
        cryptoHistoryIsLoading
    } = useCryptoDetails({ cryptoSlug: cryptoSlug as string, interval: interval as string | undefined });
    return (
        <div className="md:flex no-wrap md:-mx-2" data-testid="detail-page-container">
        {cryptoDetailData && <CryptoLeftColumn {...{crypto, similarAssets: cryptoDetailData.similarAssets}} />}
        {cryptoDetailData &&
          <div className="w-full md:w-9/12 md:mx-2 h-64">
            <div className="block p-6 shadow-sm bg-white mb-4">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </span>
                <span data-testid="crypto-history-title" className="tracking-wide">{cryptoDetailData.cryptoDetail.data.name} History</span>
              </div>
              <div>
                <ChartControls {...{ cryptoSlug: cryptoSlug as string, interval: interval as string | undefined }} />
                {cryptoHistoryIsLoading && <ChartLoading />}
                {cryptoHistoryData && <VictoryChart
                  data-testid='crypto-history-chart'
                  width={800}
                  height={300}
                  containerComponent={
                    <VictoryVoronoiContainer
                      voronoiBlacklist={["area"]}
                      labelComponent={
                        <VictoryTooltip constrainToVisibleArea />
                      }
                      labels={({ datum }) => `${new Intl.DateTimeFormat('en-US').format(new Date(datum.x))}: ${new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(datum.y)}`}
                    />
                  }
                >
                  <VictoryAxis dependentAxis />
                  <VictoryArea
                    name="area"
                    sortKey={"x"}
                    sortOrder="descending"
                    style={{ data: { fill: "rgb(129 140 248 / var(--tw-bg-opacity))" } }}
                    data={cryptoHistoryData.history} />
                  <VictoryLine
                    name="line"
                    style={{ data: { stroke: "rgb(79 70 229 / var(--tw-text-opacity))" } }}
                    sortKey={"x"}
                    sortOrder="descending"
                    data={cryptoHistoryData.history} />
                </VictoryChart>}
              </div>
            </div>
          </div>
        }
      </div>
    )
}

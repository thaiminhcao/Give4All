import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';
import '@/assets/css/scrollbar.css';
import DrawersContainer from '@/components/drawer-views/container';
import ModalsContainer from '@/components/modal-views/container';
import type { NextPageWithLayout } from '@/types';
import { Fira_Code } from '@next/font/google';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-body',
});

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia, polygon, avalanche, arbitrum, bsc, optimism, gnosis, fantom],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'Give4all',
  projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

createWeb3Modal({ wagmiConfig, projectId, chains });
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Head>
              {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1 maximum-scale=1"
              />
              <title>Donation</title>
            </Head>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <div className={`${firaCode.variable} font-body`}>
                <ToastContainer position={'bottom-center'} />
                {getLayout(<Component {...pageProps} />)}
                <ModalsContainer />
                <DrawersContainer />
              </div>
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      ) : null}
    </>
  );
}
//0x488bbb7285c1782a720faae0e00a215f2294a871

import DrawersContainer from '@/components/drawer-views/container';
import ModalsContainer from '@/components/modal-views/container';
import type { NextPageWithLayout } from '@/types';
import { Fira_Code } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';
import '@/assets/css/scrollbar.css';
import 'swiper/css';

// wagmi & rainbow kit
import '@rainbow-me/rainbowkit/styles.css';
// Import the ToastContainer component from react-toastify to display notifications.
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-body',
});

import '@/assets/css/globals.css';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { WagmiConfig } from 'wagmi';
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

const chains = [
  sepolia,
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

// 1. Get projectID at https://cloud.walletconnect.com

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const metadata = {
  name: 'Next Starter Template',
  description: 'A Next.js starter template with Web3Modal v3 + Wagmi',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

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

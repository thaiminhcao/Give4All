import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import { Fira_Code } from '@next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';
import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import 'swiper/css';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';

// wagmi & rainbow kit
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Give4All',
  projectId: '74bc34341f14d37fb7c45cb013472515',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const firaCode = Fira_Code({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-body',
});

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
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
                {getLayout(<Component {...pageProps} />)}
                <ModalsContainer />
                <DrawersContainer />
              </div>
          </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default CustomApp;

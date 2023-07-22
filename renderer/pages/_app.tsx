import { WagmiConfig, createConfig, useAccount } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { useEffect } from "react";
import { useRouter } from "next/router";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
if (!alchemyId) {
  throw new Error("NEXT_PUBLIC_ALCHEMY_ID is required");
}

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
if (!walletConnectProjectId) {
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required");
}

const coinbaseWallet = new CoinbaseWalletConnector({
  options: {
    appName: "Bonjour",
    jsonRpcUrl: "https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId",
  },
});

const walletConnect = new WalletConnectConnector({
  options: {
    projectId: walletConnectProjectId,
  },
});

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "Bonjour",

    // Optional
    appDescription: "Interact with crypto easily in a safe environment",
    appUrl: "https://gobonjour.com", // your app's url
    // appIcon: "https://gobonjour.com/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)

    connectors: [coinbaseWallet, walletConnect],
    autoConnect: true,
  })
);

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Bonjour</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "light",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

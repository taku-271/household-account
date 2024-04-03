import { Box, UIProvider } from "@yamada-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Component {...pageProps} />
      </Box>
    </UIProvider>
  );
}

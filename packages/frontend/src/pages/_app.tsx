import { Header } from "@/features/Headers";
import { Box, UIProvider } from "@yamada-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Box height="100vh">
        <Header height="8%" />
        <Box display="flex" justifyContent="center" alignItems="center" height="92%">
          <Component {...pageProps} />
        </Box>
      </Box>
    </UIProvider>
  );
}

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../next-i18next.config.js'
import 'styles/globals.css'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from 'next-themes';



import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  const router = useRouter()
  return (


    <ThemeProvider >
        <AnimatePresence mode='wait'  >
          <ChakraProvider/>
          <Component  {...pageProps} />
        </AnimatePresence>
    </ThemeProvider>



  );
}

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)

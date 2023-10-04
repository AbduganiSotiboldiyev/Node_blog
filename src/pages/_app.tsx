import "src/styles/globals.css"
import type { AppProps } from 'next/app'

import { CacheProvider, EmotionCache  } from "@emotion/react"
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from "@/helpers/create-emotion-cache";
import Head from "next/head";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/helpers/theme";
import NextProgress from "next-progress";


const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
 


export default function  MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (  
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NextProgress/>
       <ThemeProvider theme={theme}>
        <CssBaseline />
        
            <Component {...pageProps} />
          

       </ThemeProvider>
    </CacheProvider>
  )
}

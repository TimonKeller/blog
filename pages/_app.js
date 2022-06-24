import React from 'react';
import {useRouter} from 'next/router';
import { Layout } from '../components';
import '../styles/globals.css'


function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
export default MyApp

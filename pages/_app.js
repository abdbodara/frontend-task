import ContextProvider from '@/components/context/context';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
// import "bootstrap/dist/js/bootstrap.bundle";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle")
  }, []);
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

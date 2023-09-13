import '@/styles/globals.css'
import { Roboto } from 'next/font/google'



import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps } ) {
  
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>

    
  );
}

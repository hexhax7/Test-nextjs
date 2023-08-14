import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router';


const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
      
    </main>

    
  );
}

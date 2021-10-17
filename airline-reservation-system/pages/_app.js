import '../styles/globals.css'
import { CartProvider } from '../context/cart'
import { ToastProvider } from 'react-toast-notifications'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
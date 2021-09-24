import { AuthProvider } from '../components/auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>    <Component {...pageProps} />
</AuthProvider>
  )
};

export default MyApp;

// MyApp - function taking in our pages components and page props
  // returns - wraps around the page components
import '../styles/globals.css';
import { AuthProvider } from '../components/auth';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
  return(
    

  <Component {...pageProps} />

 
  )
};

export default MyApp;

// MyApp - function taking in our pages components and page props
  // returns - wraps around the page components
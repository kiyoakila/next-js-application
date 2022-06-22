import React from 'react';

// dont have to touch unless you need global styling
// can only import css from this page
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

import React from 'react';
import '../styles/index.css';
import '../styles/globals.css'
import '../styles/index.css'

// Components
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

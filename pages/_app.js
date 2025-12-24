import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/setapp-icon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/setapp-icon.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/images/setapp-icon.png" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

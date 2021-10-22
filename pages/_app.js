import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const isAuth = true

  return (
    <Layout
      navbar={{
        auth: isAuth
      }}
      main={<Component {...pageProps} />}
    />
  )
}

export default MyApp

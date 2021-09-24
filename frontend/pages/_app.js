import { Router } from 'next/router'
import { useState } from 'react'
import Layout from '../components/common/layout'
import { Loading } from '../components/common/Loading'
import AuthProvider from '../contexts/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [routing, setRouting] = useState(false)

  Router.events.on("routeChangeStart", url => {
    setRouting(true)
  })

  Router.events.on("routeChangeComplete", url => {
    setRouting(false)
  })

  return (
    <AuthProvider>
      <Layout>
        {routing ? <Loading /> : <Component {...pageProps} />}
      </Layout>
    </AuthProvider>
  )
}

export default MyApp

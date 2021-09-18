import Layout from '../components/common/layout'
import AuthProvider from '../contexts/authContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  )
}

export default MyApp

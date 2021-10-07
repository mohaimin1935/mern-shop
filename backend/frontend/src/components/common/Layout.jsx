import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <main className='flex flex-col justify-between min-h-screen'>
      <Navbar />
        {children}
      <Footer />
    </main>
  )
}

export default Layout
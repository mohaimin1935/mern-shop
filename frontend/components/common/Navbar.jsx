import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const [display, setDisplay] = useState(true)
  const [y, setY] = useState(0)

  useEffect(() => { setY(window.scrollY) }, [])

  const handleNavigation = useCallback(e => {
    const window = e.currentTarget
    if (y > window.scrollY || y < 100) {
      setDisplay(true)
    } else if (y < window.scrollY) {
      setDisplay(false)
      setShowNav(false)
    }
    setY(window.scrollY)
  }, [y])

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener("scroll", handleNavigation)

    return () => window.removeEventListener("scroll", handleNavigation)
  }, [handleNavigation])

  return (
    <nav className='mb-16 z-50'>
      <div className={display ? "show-navbar shadow-md" : "hideNavbar"}>
        <div className="container h-16 flex justify-between items-center">

          {/* logo */}
          <h3 className="text-lg sm:text-xl font-semibold">
            <Link href="/" className='hover-line'>
              <a>Clumsy Clothes</a>
            </Link>
          </h3>

          {/* small device icon */}
          <div
            className="cursor-pointer block sm:hidden"
            onClick={() => setShowNav(!showNav)}
          >
            {!showNav ? <BiMenu size={36} /> : <IoMdClose size={36} />}
          </div>

          {/* large device links */}
          <div className="hidden sm:block">
            <ul className="text-lg flex items-center gap-6">
              <NavLinks />
            </ul>
          </div>

        </div>

        {/* small device links */}
        <div
          className="block sm:hidden"
          onClick={() => setShowNav(false)}
        >
          <div className={showNav && display ? 'show-mobile-menu' : 'hide-mobile-menu'}>
            <ul className="px-12 py-8 flex flex-col gap-2 dark-bg border-t-2 border-purple-300">
              <NavLinks />
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

const NavLinks = () => (
  <>
    {links.map(link => (
      <li key={link.to}>
        <Link href={`${link.to}`}>
          <a>
            {link.name !== "Cart" && link.name}
            {link.name === "Cart" && (
              <div className="relative">
                <AiOutlineShoppingCart size={24} />
                <span className="absolute -right-2 -top-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">4</span>
              </div>
            )}
          </a>
        </Link>
      </li>
    ))}
  </>
)

const links = [
  {
    name: "Shop",
    to: "/products"
  },
  {
    name: "Register",
    to: "/register"
  },
  {
    name: "Log in",
    to: "/login"
  },
  {
    name: "Cart",
    to: "/cart"
  },
]

export default Navbar
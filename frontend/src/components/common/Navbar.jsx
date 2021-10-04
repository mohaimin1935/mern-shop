import { useCallback, useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [display, setDisplay] = useState(true);
  const [y, setY] = useState(0);

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY || y < 200) {
        setDisplay(true);
      } else if (y < window.scrollY) {
        setDisplay(false);
        setShowNav(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => window.removeEventListener("scroll", handleNavigation);
  }, [handleNavigation]);

  return (
    <nav className="mb-16">
      <div className={display ? "dark-bg show-navbar" : "hideNavbar"}>
        <div className="container h-16 h-16 flex justify-between items-center">
          {/* logo */}
          <h3 className="text-lg sm:text-xl font-semibold">
            <Link to="/" className="hover-line">
              App
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
        <div className="block sm:hidden" onClick={() => setShowNav(false)}>
          <div
            className={
              showNav && display ? "show-mobile-menu" : "hide-mobile-menu"
            }
          >
            <ul className="px-12 py-8 flex flex-col gap-2 dark-bg border-2 border-purple-300">
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const { cartItems } = useCart();

  return (
    <>
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} className="hover-line">
            {link.name}
          </Link>
        </li>
      ))}
      <Link to="/cart" className="relative">
        <div
          className="absolute bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center -top-1 -right-1.5"
          style={{ fontSize: 10 }}
        >
          {cartItems?.length}
        </div>
        <AiOutlineShopping size={24} />
      </Link>
    </>
  );
};

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Login",
    to: "/login",
  },
  {
    name: "Register",
    to: "/register",
  },
  {
    name: "Shop",
    to: "/products",
  },
];

export default Navbar;

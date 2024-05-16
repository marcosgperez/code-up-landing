import logo from "public/images/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { WithResponsiveHook } from "hooks/hooks";

const Header = ({ responsive }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    setIsMobile(responsive === "MOBILE" || responsive === "TABLET");
    setIsDesktop(responsive === "DESKTOP" || responsive === "WIDE");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [responsive]);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={scrolling ? "header-scrolled" : ""}>
      <div className="container">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="d-flex h-100 col-6">
            <Image className="logo h-100 p-2" src={logo} alt="logo" />
          </div>
          {isMobile && (
            <>
              <div className="col-4 d-flex justify-content-end">
                <button
                  className="navbar-toggler"
                  onClick={(e) => toggleMenu()}
                >
                  <HiOutlineMenuAlt3 className="burguer" />
                </button>
              </div>
            </>
          )}
          {(isDesktop || (isMobile && menuVisible)) && (
            <nav className={`d-flex col-6 h-100 p-3 ${isMobile && "nav-mobile"}`}>
              {isMobile && (
                <button className="navbar-toggler">
                  <IoClose className="burguer" onClick={(e) => toggleMenu()} />
                </button>
              )}
              <ul className="nav d-flex w-100 justify-content-around">
                <li className="nav-item d-flex m-auto">
                  <Link href="/">
                    <p>Culture</p>
                  </Link>
                </li>
                <li className="nav-item d-flex m-auto">
                  <Link href="/">
                    <p>Services</p>
                  </Link>
                </li>
                <li className="nav-item d-flex m-auto">
                  <Link href="/">
                    <p>Portfolio</p>
                  </Link>
                </li>
                <li className="nav-item d-flex m-auto h-100">
                  <button className="btn-nav">
                    <p className="f-16">Contact</p>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default WithResponsiveHook(Header);

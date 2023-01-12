import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderMenuContent from "./header/HeaderMenuContent";

const Header = () => {
  const route = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one  navbar-scrolltofixed stricky main-menu  ${
        navbar ||
        route.pathname === "/404" ||
        route.pathname === "/login" ||
        route.pathname === "/flats" ||
        route.pathname === "/register" ||
        route.pathname === "/lands"
          ? "stricky-fixed "
          : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

        <Link href="/" className="navbar_brand float-start dn-smd">
          <img className="logo1 img-fluid" src="/assets/images/header-logo.png" alt="header-logo.png" />
          <img className="logo2 img-fluid" src="/assets/images/header-logo2.png" alt="header-logo2.png" />
          <span>Dream Way</span>
        </Link>
        {/* site logo brand */}

        <nav>
          <HeaderMenuContent />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;

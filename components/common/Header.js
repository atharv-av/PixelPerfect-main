import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 801);
    };

    // Check screen size on mount
    checkScreenSize();

    // Add event listener to monitor window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="Perfect" caption="Pixel" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              Agency
            </Link>
            {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </Link> */}
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </Link>
            {/* <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              Contact
            </Link>
            <button className="button-primary">book a consultation</button>
          </nav>
          {isSmallScreen && (
            <button onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

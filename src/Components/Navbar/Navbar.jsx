import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logo.png";
import menu_icon from "../../../src/assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev); // Toggle mobile menu
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="Program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="About" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="Campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="Testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li>
          <Link to="Contact" smooth={true} offset={260} duration={500} className='btn'>Contact us</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

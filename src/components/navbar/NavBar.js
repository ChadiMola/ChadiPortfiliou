import "./NavBar.css";
import './NavBar.css'
import {TiHomeOutline} from 'react-icons/ti'
import {HiOutlineUser} from 'react-icons/hi'
import {BiBookAlt} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import { useState, useEffect } from "react";

function NavBar() {
  const [active, setActive] = useState("#home")

  const handelScroll = () => {
    const homeElement = document.querySelector('#home');
    const aboutElement = document.querySelector('#about');
    const experienceElement = document.querySelector('#experience');
    const servicesElement = document.querySelector('#services');
    const contactElement = document.querySelector('#contact');
    const scrollPosition = window.scrollY;
    if (scrollPosition >= homeElement.offsetTop && scrollPosition < aboutElement.offsetTop) {
      setActive("#home");
    } else if (scrollPosition >= aboutElement.offsetTop && scrollPosition < experienceElement.offsetTop) {
      setActive("#about");
    } else if (scrollPosition >= experienceElement.offsetTop && scrollPosition < servicesElement.offsetTop) {
      setActive("#experience");
    } else if (scrollPosition >= servicesElement.offsetTop && scrollPosition < contactElement.offsetTop) {
      setActive("#services");
    } else if (scrollPosition >= contactElement.offsetTop) {
      setActive("#contact");
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
    }
  }, [])

  return (
  <nav>
    <a href="#" onClick={() => setActive("#home")} className={active === '#home' ? 'active' : ''}><TiHomeOutline/></a>
    <a href="#about" onClick={() => setActive("#about")} className={active === "#about" ? 'active': ""} ><HiOutlineUser/></a>
    <a href="#experience" onClick={() => setActive("#experience")} className={active === "#experience" ? 'active': ""} ><BiBookAlt/></a>
    <a href="#servecis" onClick={() => setActive("#servecis")} className={active === "#servecis" ? 'active': ""} ><MdOutlineDesignServices/></a>
    <a href="#contact"onClick={() => setActive("#contact")} className={active === "#contact" ? 'active': ""}  ><MdOutlinePermContactCalendar/></a>
  </nav>
  );
}

export default NavBar;

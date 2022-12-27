import "./NavBar.css";
import './NavBar.css'
import {TiHomeOutline} from 'react-icons/ti'
import {HiOutlineUser} from 'react-icons/hi'
import {BiBookAlt} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import { useState } from "react";
function NavBar() {
  const [active, setActive] = useState("#")
 
  return (
  <nav>
    <a href="#" onClick={() => setActive("#")} className={active === '#' ? 'active' : ''}><TiHomeOutline/></a>
    <a href="#about"  onClick={() => setActive("#about")} className={active === "#about" ? 'active': ""} ><HiOutlineUser/></a>
    <a href="#experience" onClick={() => setActive("#experience")} className={active === "#experience" ? 'active': ""} ><BiBookAlt/></a>
    <a href="#servecis" onClick={() => setActive("#servecis")} className={active === "#servecis" ? 'active': ""} ><MdOutlineDesignServices/></a>
    <a href="#contact"onClick={() => setActive("#contact")} className={active === "#contact" ? 'active': ""}  ><MdOutlinePermContactCalendar/></a>
  </nav>
  );
}

export default NavBar;

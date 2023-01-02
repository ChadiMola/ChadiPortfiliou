import "./Header.css";
import Me from "../../assets/me.jpeg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chadi Mola</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="cta">
          <button className="btn">Download CV</button>
          <button className="btn btn-primary">Hire Me</button>
        </div>
       
        <div className="header__socials">
         <a><BsLinkedin /></a>
          <a><BsGithub /></a>
        </div>
        <div className="me">
          <img src={Me} alt="me" className="me__img" />
        </div>
        
        <a href='#about'className="scroll__down icon">
        <BsFillArrowDownCircleFill /></a>
        <a href='#about'className="scroll__down_text">scroll down</a>
      </div>
    </header>
  );
}

export default Header;

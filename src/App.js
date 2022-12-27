import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Portfiliou from "./components/portfliou/Portfiliou";
import Testio from "./components/testio/Testio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfiliou />
      <Testio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

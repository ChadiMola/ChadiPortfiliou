import React from "react";
import './Contact.css'
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Chadimola68@gmail.com</h5>
            <a href="mailto:chadimola68@gmail.com">Send Email</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"  />
            <h4>Linkedin</h4>
            <h5>Chadi Mola</h5>
            <a
              href="https://www.linkedin.com/in/chadi-mola-487985230"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin Profile
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"  />
            <h4>Whatsapp</h4>
            <h5>+216 95 521 959</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=21625601284&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        <form action=''>
        <input type="text" name='name' placeholder='Your Full Name' required />
<input type="email" name='email' placeholder='Your Email' required />
<textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
<button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

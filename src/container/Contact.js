import React from 'react'
import ContactForm from "../contactForm/ContactForm"


const Contact=()=>{


  return(
    <div className="contact-container">
    <div className="contact-header-wrapper">
    <h1 className="contact-page-header">Contact Me</h1>
    </div>
    <h2 className="contact-description">Please contact me using this form or via <a href="https://linkedin.com/in/joseph-sutherland81/">LinkedIn</a></h2>
    <ContactForm/>
    </div>
  )
}

export default Contact;

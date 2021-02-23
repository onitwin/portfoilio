import React from 'react'
import ContactForm from "../contactForm/ContactForm"


const Contact=()=>{


  return(
    <div className="contact-container">
    <div className="contact-header-wrapper">
    <h1 className="contact-page-header">Contact Me</h1>
    </div>
    <h2 className="contact-description">Please contact me using this form or via LinkedIn</h2>
    <ContactForm/>
    </div>
  )
}

export default Contact;

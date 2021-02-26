import React from 'react'
import ContactForm from "../contactForm/ContactForm"
import PageHeader from "../pageHeaders/PageHeader"


const Contact=()=>{


  return(
    <div className="contact-container">
    <PageHeader title="Contact Me"/>
    <h2 className="contact-description">Please contact me using this form or via <a href="https://linkedin.com/in/joseph-sutherland81/">LinkedIn</a></h2>
    <ContactForm/>
    </div>
  )
}

export default Contact;

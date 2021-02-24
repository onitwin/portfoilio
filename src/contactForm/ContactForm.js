import React from 'react'
import "./contactStyle.scss"



const ContactForm=()=>{

  return(
    <div className="contact-form-wrapper">
    <form className="formDiv"  action="https://formspree.io/f/xnqokadb" method="POST">

    <label for="name">Your name</label>
    <input type="text" id="name" required name="name">
    </input>
    <br/>

    <label for="subject">Subject</label>
    <input type="text" id="subject" required name="subject">
    </input>
    <br/>

    <label for="email">Your email</label>
    <input type="text" id="email" required name="email">
    </input>
    <br/>

    <label for="details">Your message</label>
    <textarea  id="details" required name="message">
    </textarea>
    <br/>
    <button className="formSubmit" type="submit">Send Message</button>

    </form>

    </div>
  )
}

export default ContactForm;

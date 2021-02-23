import React from 'react'
import "./contactStyle.scss"



const ContactForm=()=>{

  return(
    <div className="contact-form-wrapper">
    <form className="formDiv">

    <label for="name">Your name</label>
    <input type="text" id="name" required>
    </input>
    <br/>

    <label for="subject">Subject</label>
    <input type="text" id="subject" required>
    </input>
    <br/>

    <label for="email">Your email</label>
    <input type="text" id="email" required>
    </input>
    <br/>

    <label for="details">Your message</label>
    <textarea  id="details" required >
    </textarea>
    </form>

    </div>
  )
}

export default ContactForm;

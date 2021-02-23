import React from 'react'
import "./contactStyle.scss"



const ContactForm=()=>{

  return(
    <div className="contact-form-wrapper">
    <form className="formDiv">
    <label for="name">Your name</label>
    <input type="text" id="name">
    </input>
    </form>

    </div>
  )
}

export default ContactForm;

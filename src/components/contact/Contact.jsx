import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0hzrouz', 'template_oiqt317', form.current, 'cCsIQgIWmNfxQ2V4N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
          <MdOutlineEmail className='contact-option-icon'/>
          <h4>Email</h4>
          <h5>umerahmad4500@gmail.com</h5>
          <a href="mailto:umerahmad4500@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact-option'>
          <BsWhatsapp className='contact-option-icon'/>
          <h4>WhatsApp</h4>
          <h5>03333899850</h5>
          <a href="https:/api.whatsapp.com/send?phone+923333899850" target='_blank'>Send a Message</a>
          </article>
         
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

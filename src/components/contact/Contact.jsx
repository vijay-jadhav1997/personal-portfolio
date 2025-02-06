import { FaUser, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './Contact.css'

import contact from '/src/assets/images/contact-me.svg'
import { useState } from "react";

const formURL = import.meta.env.VITE_FORM_URL


function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formResponse, setFormResponse] = useState({status: '', message: ''})

  const handleChange = (e) => {
    e.preventDefault()

    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFormResponse({status:'pending', message: "🔄 Sending!"});

    const response = await fetch(formURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });


    if (response.ok) {
      setFormResponse({status:'success' , message: "✅ Message sent successfully!"});
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormResponse({status:'error' , message: "Error sending message. Try again later."});
    }
    
    // console.log(response)
    
    setTimeout( () => {
      setFormResponse({status: '', message: ''});
    }, 15000)
    
  }

  
  
  return (
    <section id="contact" className='contact'>
      <h3 className='contact-heading'>Contact Me</h3>
      <div className="contact-img-wrapper">
        <img src={contact} alt="Contact" />
      </div>
      <form className="form-wrapper" name='contact'  method="POST" onSubmit={e => handleSubmit(e)}>
        <input type="hidden" name='form-name' value="contact" />
        <div className="input-box">
          <label htmlFor="name">Name:</label> <br />
          <FaUser className='icon' />
          <input id="name" name="name" type="text"
            onChange={(event) => handleChange(event)}
           value={formData?.name} placeholder="Raghav Das" required 
          />
        </div>
        
        <div className="input-box">
          <label htmlFor="email">Email:</label> <br />
          <MdEmail className='icon' />
          <input id="email" name="email" type="email"
            onChange={(event) => handleChange(event)}
           value={formData?.email} placeholder="raghuvardas24@gmail.com" required 
          />
        </div>
        
        <div className="input-box">
          <label htmlFor="message">Message:</label> <br />
          <textarea id="message" name="message" type="text"
            onChange={(event) => handleChange(event)}
            value={formData?.message} placeholder='Write your message here...'  required
          ></textarea>
        </div>

        <button type='submit' className={`submit-btn ${formResponse?.status}`}>
          {formResponse?.status === 'success' ? '✅ ' : '' }
          {formResponse?.status === 'error' ? <FaTelegramPlane className='icon' /> : '' }
          {formResponse?.status === 'pending' ? '🔄 ' : '' }
          { formResponse?.status === '' ? <FaTelegramPlane className='icon' /> : ''}
          Send Message
        </button>
        <p className={`status-message ${formResponse?.status}`}>{formResponse?.message} </p>
      </form>

    </section>
  )
}

export default ContactMe
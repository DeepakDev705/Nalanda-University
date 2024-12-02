import { useState } from 'react'
 import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f7b64b2-b638-4b69-95f8-614cf4d40b46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent  Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
         <div className="contact-col">
          <h3>Send us message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><img src={mail_icon} alt="" />dk6704938@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 999999999</li>
            <li><img src={location_icon} alt="" />Dwarka mor, New Delhi , India</li>
            
          </ul>
          </div>    
         <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your Name </label>
            <input type="text" name='name' placeholder='Enter Your Name ' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label >Your Email</label>
            <input type="email" name='email' placeholder='Enter Your Email_id' required/>
            <label>Wite Your message here </label>
            <textarea name="message" id="" rows="6" placeholder='Entet Your message' required>
            </textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
          
          </div>    

    </div>
  )
}

export default Contact
import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "f2d00046-7d57-40b3-b483-204179b37c59");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Reset form upon success
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("There was an error submitting the form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div id="Contact" className='contact'>
      <div className="contact-call">
        <h3>
          Send Us a Message <img src={msg_icon} alt="Message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            required
          />
          
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            placeholder='Enter your mobile number'
            pattern="[0-9]{10}" // 10-digit validation
            required
          />
          
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            name='message'
            rows="6"
            placeholder='Write your message here'
            required
          ></textarea>
          
          <button type='submit' className='btn dark-btn'>
            Submit Now <img src={white_arrow} alt="Submit button icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>

      <div className="contact-info">
        <h4>Contact Information</h4>
        <ul>
          <li>
            <img src={mail_icon} alt="Email icon" />
            prashantparmar06@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" />
            889899898
          </li>
          <li>
            <img src={location_icon} alt="Location icon" />
            Indore, ID/5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;

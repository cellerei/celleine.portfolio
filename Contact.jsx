import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_si4di86',      // Replace with your EmailJS service ID
        'template_4gj18ih',      // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'uBLsiO2PGqHHiamFD'           // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email.', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="font-mono bg-yellow-200 max-w-[1200px] mx-auto sm:py-20 p-5 rounded-lg" id="contact">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">
          Contact Me
        </h1>
      </div>

      <div className="max-w-[800px] mx-auto mt-6 bg-[#161616] rounded-xl">
        <div className="p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid-cols-2 gap-y-4">
              
              <div className="mt-2.5 relative">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="mt-2.5 relative">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="mt-2.5 relative">
                <textarea 
                  name="message" 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400" 
                  rows="4"
                />
              </div>

              <div className="sm:col-span-2">
                <button 
                  type="submit"
                  className="text-xl w-full p-4 mt-2 font-extrabold text-gray-600 bg-primary-color rounded-md"
                >
                  Send Message
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// Contact.js - React Component
import React, { useState } from 'react';
import './Contact.css'; // You'll need to create this CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.inquiry || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace this with your actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for your message! Our team will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiry: '',
          message: ''
        });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: '📧',
      title: 'Email',
      details: ['contactus@zetheta.in']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 91362 49369']
    },
    {
      icon: '📍',
      title: 'Address',
      details: [
        'B3, Grd Flr Silver, Valley1, CHS Ltd',
        'Vakola Brg, CSM Marg, Santacruz(East)',
        'Mumbai, Maharashtra, India, 400055'
      ]
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Support', hours: '24/7 Available' }
  ];

  const inquiryTypes = [
    { value: '', label: 'Select inquiry type' },
    { value: 'general', label: 'General Information' },
    { value: 'demo', label: 'Product Demo' },
    { value: 'pricing', label: 'Pricing & Plans' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="zetheta-contact">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">Get in touch with our voice intelligence security experts</p>
        </div>

        {/* Contact Section */}
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title">Get In Touch</h2>
            
            {contactItems.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Office Hours */}
            <div className="office-hours">
              <h3>Office Hours</h3>
              {officeHours.map((item, index) => (
                <div key={index} className="hours-row">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="section-title">Send Us A Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry" className="form-label">
                  Inquiry Type <span className="required">*</span>
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your voice analysis security needs..."
                  className="form-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
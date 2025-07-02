import React, { useState } from 'react';

const ZethetaContact = () => {
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

  const handleSubmit = async () => {
    // Simple validation
    if (!formData.name || !formData.email || !formData.inquiry || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
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
    },
    {
      icon: '🌐',
      title: 'Website',
      details: ['www.zetheta.in']
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
    <div className="min-h-screen text-white" style={{
      background: 'linear-gradient(135deg, #205c79 0%, #2a6d8a 100%)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Header */}
      <header className="py-5" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center flex-col md:flex-row gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                Z
              </div>
              <div className="text-2xl font-black tracking-wider" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                ZETHETA
              </div>
            </div>
            <nav className="flex gap-4 flex-wrap justify-center">
              {['Home', 'About', 'Contact', 'Login', 'Sign Up'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-orange-400 hover:-translate-y-1 hover:shadow-lg"
                  style={{ boxShadow: 'hover:0 4px 15px rgba(240, 125, 36, 0.3)' }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-15">
        <div className="max-w-6xl mx-auto px-5">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 
              className="text-6xl md:text-7xl mb-5 font-black"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                background: 'linear-gradient(45deg, #ffffff, #f07d24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Contact Us
            </h1>
            <p className="text-2xl opacity-90">
              Get in touch with our voice intelligence security experts
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-15 mb-20">
            {/* Contact Info */}
            <div 
              className="bg-orange-500 p-10 rounded-3xl backdrop-blur-lg border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <h2 className="text-3xl font-black mb-8 text-white" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Get In Touch
              </h2>
              
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 mb-6 p-4 bg-white/20 rounded-lg transition-all duration-300 hover:bg-white/30 hover:translate-x-2 cursor-pointer"
                >
                  <div className="bg-white text-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="opacity-90">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="bg-white/20 p-8 rounded-2xl mt-8 border border-white/30">
                <h3 className="text-white mb-4 font-semibold text-lg">Office Hours</h3>
                {officeHours.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2 py-1">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-lg border border-white/20"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <h2 className="text-3xl font-black mb-8 text-white" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                Send Us A Message
              </h2>
              
              <div>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium text-orange-500">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg placeholder-white/60"
                    style={{ boxShadow: 'focus:0 0 15px rgba(240, 125, 36, 0.2)' }}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium text-orange-500">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg placeholder-white/60"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 font-medium text-orange-500">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg placeholder-white/60"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium text-orange-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg placeholder-white/60"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="inquiry" className="block mb-2 font-medium text-orange-500">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-gray-800 text-white">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-orange-500">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your voice analysis security needs..."
                    rows={5}
                    className="w-full p-4 border-2 border-white/20 rounded-lg bg-white/10 text-white text-base transition-all duration-300 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg placeholder-white/60 resize-y"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 px-10 border-none rounded-full text-base font-semibold cursor-pointer transition-all duration-300 text-white hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(45deg, #f07d24, #f69f1c)',
                    boxShadow: 'hover:0 8px 25px rgba(240, 125, 36, 0.3)'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ZethetaContact;

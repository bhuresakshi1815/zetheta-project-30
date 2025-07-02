// contact.js - Zetheta Contact Form
class ZethetaContact {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.formData = {
            name: '',
            email: '',
            company: '',
            phone: '',
            inquiry: '',
            message: ''
        };
        this.isSubmitting = false;
        
        this.init();
    }

    init() {
        this.loadFonts();
        this.injectStyles();
        this.render();
        this.bindEvents();
    }

    loadFonts() {
        // Load Google Fonts
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Archivo+Black&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    injectStyles() {
        const styles = `
            .zetheta-contact * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .zetheta-contact {
                font-family: 'Poppins', sans-serif;
                background: linear-gradient(135deg, #205c79 0%, #2a6d8a 100%);
                color: white;
                min-height: 100vh;
                padding: 60px 0;
            }

            .zetheta-contact .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .zetheta-contact .hero-section {
                text-align: center;
                padding: 80px 0;
                animation: fadeIn 1s ease-in;
            }

            .zetheta-contact .hero-title {
                font-family: 'Archivo Black', sans-serif;
                font-size: clamp(3rem, 8vw, 6rem);
                margin-bottom: 20px;
                font-weight: 900;
                background: linear-gradient(45deg, #ffffff, #f07d24);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .zetheta-contact .hero-subtitle {
                font-size: 1.5rem;
                opacity: 0.9;
            }

            .zetheta-contact .contact-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                margin-bottom: 80px;
            }

            @media (max-width: 768px) {
                .zetheta-contact .contact-grid {
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
            }

            .zetheta-contact .contact-info {
                background: #f07d24;
                padding: 40px;
                border-radius: 24px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .zetheta-contact .contact-form {
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 24px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .zetheta-contact .section-title {
                font-family: 'Archivo Black', sans-serif;
                font-size: 1.875rem;
                margin-bottom: 32px;
                color: white;
            }

            .zetheta-contact .contact-item {
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 24px;
                padding: 16px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                transition: all 0.3s ease;
                cursor: pointer;
            }

            .zetheta-contact .contact-item:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: translateX(8px);
            }

            .zetheta-contact .contact-icon {
                background: white;
                color: #f07d24;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
                flex-shrink: 0;
            }

            .zetheta-contact .contact-details h3 {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 4px;
            }

            .zetheta-contact .contact-details p {
                opacity: 0.9;
            }

            .zetheta-contact .office-hours {
                background: rgba(255, 255, 255, 0.2);
                padding: 32px;
                border-radius: 16px;
                margin-top: 32px;
                border: 1px solid rgba(255, 255, 255, 0.3);
            }

            .zetheta-contact .office-hours h3 {
                color: white;
                margin-bottom: 16px;
                font-weight: 600;
                font-size: 1.125rem;
            }

            .zetheta-contact .hours-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                padding: 4px 0;
            }

            .zetheta-contact .form-group {
                margin-bottom: 24px;
            }

            .zetheta-contact .form-label {
                display: block;
                margin-bottom: 8px;
                font-weight: 500;
                color: #f07d24;
            }

            .zetheta-contact .form-input, 
            .zetheta-contact .form-select, 
            .zetheta-contact .form-textarea {
                width: 100%;
                padding: 16px;
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                font-size: 1rem;
                transition: all 0.3s ease;
                font-family: inherit;
            }

            .zetheta-contact .form-input::placeholder,
            .zetheta-contact .form-textarea::placeholder {
                color: rgba(255, 255, 255, 0.6);
            }

            .zetheta-contact .form-input:focus,
            .zetheta-contact .form-select:focus,
            .zetheta-contact .form-textarea:focus {
                outline: none;
                border-color: #f07d24;
                background: rgba(255, 255, 255, 0.15);
                box-shadow: 0 0 15px rgba(240, 125, 36, 0.2);
            }

            .zetheta-contact .form-select option {
                background: #374151;
                color: white;
            }

            .zetheta-contact .form-textarea {
                resize: vertical;
                min-height: 120px;
            }

            .zetheta-contact .submit-btn {
                width: 100%;
                padding: 16px 40px;
                border: none;
                border-radius: 9999px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                background: linear-gradient(45deg, #f07d24, #f69f1c);
                font-family: inherit;
            }

            .zetheta-contact .submit-btn:hover:not(:disabled) {
                transform: translateY(-4px);
                box-shadow: 0 8px 25px rgba(240, 125, 36, 0.3);
            }

            .zetheta-contact .submit-btn:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .zetheta-contact .animate-fade-in {
                animation: fadeIn 1s ease-in;
            }

            .zetheta-contact .required {
                color: #f07d24;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    render() {
        const html = `
            <div class="zetheta-contact">
                <div class="container">
                    <!-- Hero Section -->
                    <div class="hero-section">
                        <h1 class="hero-title">Contact Us</h1>
                        <p class="hero-subtitle">Get in touch with our voice intelligence security experts</p>
                    </div>

                    <!-- Contact Section -->
                    <div class="contact-grid">
                        <!-- Contact Info -->
                        <div class="contact-info">
                            <h2 class="section-title">Get In Touch</h2>
                            
                            <div class="contact-item">
                                <div class="contact-icon">📧</div>
                                <div class="contact-details">
                                    <h3>Email</h3>
                                    <p>contactus@zetheta.in</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">📞</div>
                                <div class="contact-details">
                                    <h3>Phone</h3>
                                    <p>+91 91362 49369</p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-icon">📍</div>
                                <div class="contact-details">
                                    <h3>Address</h3>
                                    <p>B3, Grd Flr Silver, Valley1, CHS Ltd</p>
                                    <p>Vakola Brg, CSM Marg, Santacruz(East)</p>
                                    <p>Mumbai, Maharashtra, India, 400055</p>
                                </div>
                            </div>

                            <!-- Office Hours -->
                            <div class="office-hours">
                                <h3>Office Hours</h3>
                                <div class="hours-row">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div class="hours-row">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div class="hours-row">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                                <div class="hours-row">
                                    <span>Emergency Support</span>
                                    <span>24/7 Available</span>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="contact-form">
                            <h2 class="section-title">Send Us A Message</h2>
                            
                            <form id="contactForm">
                                <div class="form-group">
                                    <label for="name" class="form-label">
                                        Full Name <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        class="form-input"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="email" class="form-label">
                                        Email Address <span class="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        class="form-input"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="company" class="form-label">
                                        Company/Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Enter your company name"
                                        class="form-input"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="phone" class="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        class="form-input"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="inquiry" class="form-label">
                                        Inquiry Type <span class="required">*</span>
                                    </label>
                                    <select
                                        id="inquiry"
                                        name="inquiry"
                                        class="form-select"
                                        required
                                    >
                                        <option value="">Select inquiry type</option>
                                        <option value="general">General Information</option>
                                        <option value="demo">Product Demo</option>
                                        <option value="pricing">Pricing & Plans</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="message" class="form-label">
                                        Message <span class="required">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your voice analysis security needs..."
                                        class="form-textarea"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" class="submit-btn" id="submitBtn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = html;
    }

    bindEvents() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const formInputs = form.querySelectorAll('input, select, textarea');

        // Handle input changes
        formInputs.forEach(input => {
            input.addEventListener('input', (event) => this.handleInputChange(event));
            input.addEventListener('change', (event) => this.handleInputChange(event));
        });

        // Handle form submission
        form.addEventListener('submit', (event) => this.handleSubmit(event));

        // Add hover effects to contact items
        const contactItems = document.querySelectorAll('.zetheta-contact .contact-item');
        contactItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(8px)';
                this.style.background = 'rgba(255, 255, 255, 0.3)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
                this.style.background = 'rgba(255, 255, 255, 0.2)';
            });
        });

        // Add animation on load
        setTimeout(() => {
            const heroSection = document.querySelector('.zetheta-contact .hero-section');
            if (heroSection) {
                heroSection.classList.add('animate-fade-in');
            }
        }, 100);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.formData[name] = value;
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        
        // Update formData with current values
        const formElements = new FormData(form);
        for (let [key, value] of formElements.entries()) {
            this.formData[key] = value;
        }
        
        // Simple validation
        if (!this.formData.name || !this.formData.email || !this.formData.inquiry || !this.formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        if (this.isSubmitting) return;
        
        this.isSubmitting = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            alert('Thank you for your message! Our team will get back to you within 24 hours.');
            
            // Reset form
            form.reset();
            this.formData = {
                name: '',
                email: '',
                company: '',
                phone: '',
                inquiry: '',
                message: ''
            };
            
            this.isSubmitting = false;
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 2000);
    }

    // Method to get form data (useful for integrating with APIs)
    getFormData() {
        return { ...this.formData };
    }

    // Method to set custom submit handler
    setSubmitHandler(handler) {
        this.customSubmitHandler = handler;
    }

    // Method to update contact information
    updateContactInfo(contactData) {
        // This method can be used to dynamically update contact information
        const emailElement = document.querySelector('.zetheta-contact .contact-item:nth-child(1) .contact-details p');
        const phoneElement = document.querySelector('.zetheta-contact .contact-item:nth-child(2) .contact-details p');
        
        if (contactData.email && emailElement) {
            emailElement.textContent = contactData.email;
        }
        
        if (contactData.phone && phoneElement) {
            phoneElement.textContent = contactData.phone;
        }
    }
}

// Usage: Initialize the contact form
// const contactForm = new ZethetaContact('contact-container');

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ZethetaContact;
}

// Make available globally
window.ZethetaContact = ZethetaContact;
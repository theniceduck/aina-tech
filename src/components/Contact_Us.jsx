import React, { useState } from 'react'
import styles from '../style'

const Contact_Us = () => {
  // Replace this with your actual Google Form URL
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdGR6m2tKu3R9QBlhltVOmPxcaNcptDwjdKxuWlAKSZHG-Tyg/formResponse";
  
  // Replace these with your actual Google Form field names
  const GOOGLE_FORM_FIELDS = {
    name: "entry.789423250",
    email: "entry.1130519964",
    phone: "entry.974048387",
    subject: "entry.935035897",
    message: "entry.2049761803"
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create a hidden form and submit it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_FORM_ACTION;
    form.target = '_blank'; // This will open response in new tab

    // Add form fields
    Object.keys(formData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = GOOGLE_FORM_FIELDS[key];
      input.value = formData[key];
      form.appendChild(input);
    });

    // Submit form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Clear form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  return (
    <section id='contact_us' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='w-full flex flex-col items-center sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`${styles.heading2} text-center mb-8 whitespace-nowrap`}>Contact Us</h2>
        <div className='w-full max-w-[600px] text-center'>
          <p className={`${styles.paragraph}`}>
            Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className='w-full max-w-[1000px] relative z-[1]'>
        <form onSubmit={handleSubmit} className='w-full bg-black-gradient rounded-[20px] p-8 md:p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div className='flex flex-col'>
              <label htmlFor='name' className='font-poppins font-medium text-[16px] text-white mb-2'>
                Full Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className='font-poppins px-4 py-3 rounded-[10px] bg-dimBlue border border-dimWhite text-white focus:border-secondary outline-none'
                placeholder='John Doe'
              />
            </div>

            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='font-poppins font-medium text-[16px] text-white mb-2'>
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='font-poppins px-4 py-3 rounded-[10px] bg-dimBlue border border-dimWhite text-white focus:border-secondary outline-none'
                placeholder='john@example.com'
              />
            </div>

            {/* Phone Field */}
            <div className='flex flex-col'>
              <label htmlFor='phone' className='font-poppins font-medium text-[16px] text-white mb-2'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='font-poppins px-4 py-3 rounded-[10px] bg-dimBlue border border-dimWhite text-white focus:border-secondary outline-none'
                placeholder='+60123456789'
              />
            </div>

            {/* Subject Field */}
            <div className='flex flex-col'>
              <label htmlFor='subject' className='font-poppins font-medium text-[16px] text-white mb-2'>
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                required
                value={formData.subject}
                onChange={handleChange}
                className='font-poppins px-4 py-3 rounded-[10px] bg-dimBlue border border-dimWhite text-white focus:border-secondary outline-none'
                placeholder='Project Discussion'
              />
            </div>

            {/* Message Field */}
            <div className='flex flex-col md:col-span-2'>
              <label htmlFor='message' className='font-poppins font-medium text-[16px] text-white mb-2'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className='font-poppins px-4 py-3 rounded-[10px] bg-dimBlue border border-dimWhite text-white focus:border-secondary outline-none resize-none'
                placeholder='Your message here...'
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='mt-8'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full md:w-auto px-8 py-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-70'
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className='mt-4 font-poppins text-green-400'>
              Thank you for your message! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact_Us 
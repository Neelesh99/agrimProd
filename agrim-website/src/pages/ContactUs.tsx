import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import EntryBox from '../components/EntryBox';
import emailjs from 'emailjs-com';
interface EmailProps {
    name: string,
    company: string
    email: string,
    message: string,
    phone: string
}

function sendEmail(props: EmailProps) {

    emailjs.send('service_we8ujnf', 'template_qtf1i7a', {
        from_name: props.name,
        message: props.message,
        company_name: props.company,
        reply_to: props.email,
        phone_no: props.phone,
    }, '0EtUNp83sr_-uKAK8');
}

const ContactUs: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Send email with form data
    sendEmail({
      name: formData.name,
      company: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Show success message to user
    alert('Thank you for your message. We will get back to you soon!');
  };

  // Handle button click
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // This prevents default button behavior
    e.preventDefault();
    // Call the same submission logic
    handleSubmit(e as unknown as React.FormEvent);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow px-8 py-12 max-w-7xl mx-auto w-full">
        <h1 className="text-center mb-16 text-4xl text-gray-800 font-bold">Contact Us</h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-20 px-4 lg:px-8 max-w-6xl mx-auto">
          {/* Contact Form - takes more width */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit}>
              <EntryBox
                label="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <EntryBox
                label="Company name"
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
              
              <EntryBox
                label="Your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <EntryBox
                label="Your phone number"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              
              <EntryBox
                label="Your message"
                type="textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              />
              
              {/* Button with orange background */}
              <div className="flex">
                <Button 
                  onClick={handleButtonClick} 
                  className="py-3 px-12"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Panel - takes less width */}
          <div className="w-full lg:w-2/5 bg-[#2a4d3e] text-white p-8 rounded-xl mt-8 lg:mt-0">
            {/* Office Section */}
            <div className="mb-12">
              <h2 className="text-center text-3xl mb-4 font-normal">Office</h2>
              <div className="border-t border-orange-500 w-full mb-8"></div>
              
              <p className="text-center mb-3"><span className="text-orange-500 font-bold">Singapore</span></p>
              <p className="text-center leading-relaxed">60 Paya Lebar Road,</p>
              <p className="text-center leading-relaxed">#09-43 Paya Lebar Square,</p>
              <p className="text-center leading-relaxed">Singapore - 409051</p>
              <p className="text-center leading-relaxed mt-3">Telephone: +65 6638 8646</p>
              <p className="text-center leading-relaxed">WhatsApp: +65 9169 4785</p>
            </div>

            {/* Factories Section */}
            <div>
              <h2 className="text-center text-3xl mb-4 font-normal">Factories</h2>
              <div className="border-t border-orange-500 w-full mb-8"></div>
              
              <p className="text-center mb-2"><span className="text-orange-500 font-bold">Medan, Indonesia</span></p>
              <p className="text-center leading-relaxed mb-6">Spices, Coconut Ingredients</p>
              
              <p className="text-center mb-2"><span className="text-orange-500 font-bold">Surabaya, Indonesia</span></p>
              <p className="text-center leading-relaxed mb-6">Spices</p>
              
              <p className="text-center mb-2"><span className="text-orange-500 font-bold">Pontianak, Indonesia</span></p>
              <p className="text-center leading-relaxed">Coconut Ingredients</p>
              <p className="text-center mt-2">
                <a href="https://www.unicoconut.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.unicoconut.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs; 
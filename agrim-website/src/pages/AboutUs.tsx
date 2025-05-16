import companyPic from "../assets/companyPic.png"
import tick from "../assets/tick.png"
import workersWorking from "../assets/original/workersWorking.jpeg"
import workersNew from "../assets/original/workersNew.jpeg"
import multitasker from "../assets/original/icon-multitasker.png"
import gloves from "../assets/original/icon-gloves.png"
import lab from "../assets/original/icon-lab.png"
import factory from "../assets/original/icon-factory.png"
import gmp from "../assets/original/gmp.jpeg";
import haccp from "../assets/original/haccp.jpeg";
import qualityLogo from "../assets/original/TQSCI.jpeg";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* About Us Title */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 pb-2 inline-block">About us</h1>
        </div>
      </section>

      {/* Indonesian Origin Section */}
      <section className="py-4 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img src={workersWorking} alt="Agrim Team" className="w-full h-full object-cover"/>
          </div>
          
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">Indonesian Origin</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 2004, Agrim has grown from a small agricultural trading company into a trusted provider of premium products and reliable service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Committed to quality and sustainability, we ensure strict quality control from sourcing to shipment, partner with local farmers, and uphold fair trade practices.
            </p>
          </div>
        </div>
      </section>

      {/* Agrim Today Section */}
      <section className="py-8 px-6 my-4">
        <div className="container mx-auto">
          <div className="bg-[#2F4C39] text-white rounded-3xl shadow-lg p-8 relative">
            <h2 className="text-2xl font-bold mb-8 border-b-2 border-orange-500 pb-2 inline-block absolute top-6 left-8">Agrim today</h2>
            
            <div className="grid md:grid-cols-5 gap-8 mt-12">
              <div className="md:col-span-2">
                <p className="leading-relaxed text-left">
                  We are dedicated to providing pure, high-quality products while fostering trusted, transparent relationships with customers and suppliers. By supporting supplier productivity, buyer growth, and employee satisfaction, we aim to drive mutual success and sustainable business growth.
                </p>
              </div>
              
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-start space-x-4">
                <img src={tick} className="w-6 h-6"/>
                  <p className="text-left">Specialise in procurement, processing and supplying of spices & coconut ingredients.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                <img src={tick} className="w-6 h-6"/>
                  <p className="text-left">A global customer base with exports to 80+ countries.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                <img src={tick} className="w-6 h-6"/>
                  <p className="text-left">High standard facilities with FSSC-22000, ISO-9001, HACCP and GMP certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-8 text-white border-b-2 border-orange-500 pb-2 inline-block">Why choose us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {/* Productivity & Efficiency */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="text-orange-500 text-4xl">📈</div> {/* Placeholder for icon */}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Productivity & efficiency</h3>
              <p className="text-gray-300">
                We optimise processes to ensure full supply chain visibility and customise each product to meet customer requirements.
              </p>
            </div>
            
            {/* Quality */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="text-orange-500 text-4xl">🔍</div> {/* Placeholder for icon */}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quality</h3>
              <p className="text-gray-300">
                With ISO, GMP, and HACCP certifications, we uphold the highest international standards, ensuring safe, premium-quality products.
              </p>
            </div>
            
            {/* Origination */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <div className="text-orange-500 text-4xl">🌱</div> {/* Placeholder for icon */}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Origination</h3>
              <p className="text-gray-300">
                Our proximity to raw materials ensures shorter lead times and low inventory, reducing waste and preventing product expiry for fresher, high-quality offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-8 px-6 pb-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img src={companyPic} alt="Agrim Team Working" className="w-full h-full object-cover"/>
          </div>
          
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated workforce of 150 people drives our market strength through collaboration and efficiency. We invest in comprehensive training and regular workshops to continually enhance their skills and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-8 px-6 pt-4 pb-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="text-left w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">Our Facility</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {/* Facility Icons */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={factory} alt="Factory" className="h-16 w-20 rounded-xl"/>
                  </div>
                  <p className="text-gray-600 font-medium">20,000 sqm factory</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={gloves} alt="Hygiene" className="h-16 w-16 rounded-xl"/>
                  </div>
                  <p className="text-gray-600 font-medium">Hygiene work space</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={lab} alt="Laboratory" className="h-16 w-24 rounded-xl"/>
                  </div>
                  <p className="text-gray-600 font-medium">Equipped in-house laboratory</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={multitasker} alt="Workers" className="h-16 w-16 rounded-xl"/>
                  </div>
                  <p className="text-gray-600 font-medium">Skilled & trained workers</p>
                </div>
              </div>
            </div>
            
            {/* Facility Image */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg h-80">
              <img src={workersNew} alt="Agrim Facility" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 px-6 pt-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-orange-500 pb-2 inline-block">Certifications</h2>
          <p className="text-gray-600 mb-8">Our factory is accredited with ISO-9001, HACCP, GMP certifications</p>

          {/* Certifications Logos */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <img src={gmp} alt="GMP Certified" className="h-24 md:h-32 object-contain rounded-xl"/>
            <img src={haccp} alt="HACCP Certified" className="h-24 md:h-32 object-contain rounded-xl"/>
            <img src={qualityLogo} alt="ISO 9001 Certified" className="h-24 md:h-32 object-contain rounded-xl"/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs; 
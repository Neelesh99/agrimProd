import sial from "../assets/original/SIAL-logo-1.png"
import gulffood from "../assets/original/Gulfood.png"
import anuga from "../assets/original/anuga-logo-vector.png"
import ift from "../assets/original/IFT-1920x1080-1.jpg"
import thaifex from "../assets/original/images.png"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Exhibitions: React.FC = () => {

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-800">
            Trade shows we exhibit at
          </h1>

          {/* Exhibitions Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16 mb-16">
            {/* SIAL */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-24 flex items-center justify-center">
                <img 
                  src={sial} 
                  alt="SIAL Paris Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Paris, France</h3>
              <p className="text-gray-600">19 - 23 October 2024</p>
            </div>

            {/* Gulfood */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-24 flex items-center justify-center">
                <img 
                    src={gulffood} 
                  alt="Gulfood Dubai Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Dubai, UAE</h3>
              <p className="text-gray-600">17 - 21 February 2025</p>
            </div>

            {/* Anuga */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-24 flex items-center justify-center">
                <img 
                  src={anuga} 
                  alt="Anuga Cologne Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Cologne, Germany</h3>
              <p className="text-gray-600">4 - 8 October 2025</p>
            </div>
          </div>

          {/* Exhibitions Grid - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 md:px-16 lg:px-24">
            {/* Thaifex */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-24 flex items-center justify-center">
                <img 
                  src={thaifex} 
                  alt="Thaifex Bangkok Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Bangkok, Thailand</h3>
              <p className="text-gray-600">27 - 31 May 2025</p>
            </div>

            {/* IFT */}
            <div className="flex flex-col items-center">
              <div className="mb-6 h-24 flex items-center justify-center">
                <img 
                  src={ift} 
                  alt="IFT Chicago Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Chicago, USA</h3>
              <p className="text-gray-600">13 - 16 July 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Exhibitions; 
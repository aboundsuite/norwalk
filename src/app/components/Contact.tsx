import React from 'react';

const Contact = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto max-w-md text-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Contact Us</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Call Us</h2>
          <p className="text-lg text-gray-700 mb-4">419-668-4629</p>
          <a href="tel:417-532-4412">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl">
              Call Now
            </button>
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Email Us</h2>
          <p className="text-lg text-gray-700 mb-4">info@norwalkbc.com</p>
          <a href="mailto:tca@visittabernacle.com?subject=Contact from Website">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl">
              Email Now
            </button>
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">We are at</h2>
          <p className="text-lg text-gray-700 mb-4">2084 US-20<br/>Norwalk, OH 44857</p>
          <a href="https://www.google.com/maps/place/Norwalk+Baptist+Church/@41.2315543,-82.6689839,17z/data=!3m1!4b1!4m6!3m5!1s0x883a16f78e212c61:0x3f86fbfe677e041a!8m2!3d41.2315543!4d-82.666409!16s%2Fg%2F125_vdd0r?entry=ttu" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl">
              Get Directions
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;

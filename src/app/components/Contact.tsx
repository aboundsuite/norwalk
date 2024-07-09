import React from 'react';

const Contact = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto max-w-md text-center p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Contact Us</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Call Us</h2>
          <p className="text-lg text-gray-700 mb-4">417-532-4412</p>
          <a href="tel:417-532-4412">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl">
              Call Now
            </button>
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Email Us</h2>
          <p className="text-lg text-gray-700 mb-4">tca@visittabernacle.com</p>
          <a href="mailto:tca@visittabernacle.com?subject=Contact from Website">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl">
              Email Now
            </button>
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">We are at</h2>
          <p className="text-lg text-gray-700 mb-4">929 Springfield Rd,<br/>Lebanon, MO 65536</p>
          <a href="https://www.google.com/maps/place/Tabernacle+Baptist+Church/@37.6733476,-92.6702843,17z/data=!3m1!4b1!4m5!3m4!1s0x87c539e0a551f449:0x8d0b04d598ca99c8!8m2!3d37.6731641!4d-92.6681006?q=tabernacle+baptist+church+lebanon+mo&rlz=1C5CHFA_enIN983IN983&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjTmNS4xJP5AhUAumMGHTmpBdgQ_AUoAXoECAIQAw&shorturl=1" target="_blank" rel="noopener noreferrer">
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

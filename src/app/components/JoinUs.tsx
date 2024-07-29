import React from 'react';

const JoinUs = () => (
  <section className="relative flex items-end justify-center min-h-screen bg-blue-100">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="/norwalk.png"
     
    />
    <div className="relative z-10 text-center text-white bg-blue-100 bg-opacity-50 p-10 rounded mb-20 drop-shadow-xl">

      <h1 className="text-xl font-bold mb-4"></h1>
     
      <button className="bg-blue-900 h-20 w-50 hover:bg-blue-700 text-white px-4 py-2 rounded px-20 text-xl">I’m new here!</button>
    </div>
  </section>
);

export default JoinUs;

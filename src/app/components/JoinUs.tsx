import React from 'react';

const JoinUs = () => (
  <section className="relative flex items-end justify-center min-h-screen bg-blue-100">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/visittabernacle.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="relative z-10 text-center text-white bg-blue-100 bg-opacity-50 p-10 rounded mb-10 drop-shadow-xl">
      <h1 className="text-4xl font-bold mb-4">Join Us</h1>
      <p className="text-xl mb-4">So you can be a part of the Tabernacle Family</p>
      <button className="bg-blue-900 text-white px-4 py-2 rounded">I’m new here!</button>
    </div>
  </section>
);

export default JoinUs;

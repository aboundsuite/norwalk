import React from 'react';

const ChurchApp = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-blue-100" style={{ backgroundImage: 'url(/appdownload.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Stay Connected 24x7</h1>
        <p className="text-lg mb-8">Connecting you with your Norwalk Baptist Church community.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-900 text-white px-6 py-2 rounded">App Store</button>
          <button className="bg-green-600 text-white px-6 py-2 rounded">Play Store</button>
        </div>
      </div>
    </section>
  );
};

export default ChurchApp;

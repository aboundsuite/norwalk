import React from 'react';

const ServiceSchedule = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-custom-dark-blue text-white pb-60">
      <div className="container mx-auto px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start" style={{ maxWidth: '940px' }}>
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0 md:w-1/2 md:mr-8">
          <div className="mb-4">
            <img src="/calendar.svg" alt="Service Schedule" className="h-16 w-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-green-500">Service Schedule</h2>
          <p className="text-lg mb-6">
            Sunday Life Group Classes: 9:45 AM<br />
            Sunday Morning: 11:00 AM<br />
            Evening Service: 6:00 PM<br />
            Wednesday Evening: 7:00 PM
          </p>
          <a href="#watch-live" className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">
            Watch Live
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 md:ml-8">
          <div className="mb-4">
            <img src="/location.svg" alt="Location & Contact" className="h-16 w-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-green-500">Location & Contact</h2>
          <p className="text-lg mb-6">
            2084 US-20 West Norwalk OH 44857<br />
            Phone: (419) 668-4629<br />
            Email: info@norwalkbc.com
          </p>
          <a href="https://www.google.com/maps/place/Norwalk+Baptist+Church/@41.2315543,-82.6689839,17z/data=!3m1!4b1!4m6!3m5!1s0x883a16f78e212c61:0x3f86fbfe677e041a!8m2!3d41.2315543!4d-82.666409!16s%2Fg%2F125_vdd0r?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSchedule;

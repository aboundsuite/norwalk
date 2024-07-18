const ServiceSchedule = () => {
  return (
    <section className="flex flex-col md:flex-row items-center text-center h-screen bg-blue-900 text-white">
      <div className="container mx-auto px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0 md:w-1/2">
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
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <div className="mb-4">
            <img src="/location.svg" alt="Location & Contact" className="h-16 w-16" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-green-500">Location & Contact</h2>
          <p className="text-lg mb-6">
            2084 US-20 West Norwalk OH 44857<br />
            Phone: (419) 668-4629<br />
            Email: info@norwalkbc.com
          </p>
          <a href="https://www.google.com/maps/place/Tabernacle+Baptist+Church/@37.6733476,-92.6702843,17z/data=!3m1!4b1!4m5!3m4!1s0x87c539e0a551f449:0x8d0b04d598ca99c8!8m2!3d37.6731641!4d-92.6681006" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};
  
  export default ServiceSchedule;
  
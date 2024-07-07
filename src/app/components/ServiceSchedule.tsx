const ServiceSchedule = () => (
    <section id="services" className="flex items-center justify-center min-h-screen bg-blue-100 p-8 text-center">
   <div className="text-center w-90 mx-auto">
   <h2 className="text-3xl font-bold mb-4 text-blue-900 text-5xl mb-100">Service Schedule</h2>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-2">Every Sunday</h3>
          <p>10AM: Sunday School</p>
          <p>11AM: Worship Service</p>
          <p>5:45PM: Evening Service</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Every Wednesday</h3>
          <p>7PM: Mid Week Service</p>
        </div>
      </div>

      </div>
    </section>
  );
  
  export default ServiceSchedule;
  
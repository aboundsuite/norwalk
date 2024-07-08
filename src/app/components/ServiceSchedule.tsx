const ServiceSchedule = () => (
    <section id="services" className="flex items-center justify-center min-h-screen bg-blue-100 p-8 text-center">
   <div className="text-center w-90 mx-auto">
   <h2 className="text-3xl font-bold mb-4 text-blue-900 text-5xl mb-100">Service Schedule</h2>
     
      <div className="grid grid-cols-1 gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-500 mb-10 mt-10">Every Sunday</h3>
          <p className="text-xl font-normal mb-2 text-gray-600">Sunday School                               10:00 am</p>
          <p className="text-xl font-normal mb-2 text-gray-600">Sunday Morning                             11:00 am</p>
          <p className="text-xl font-normal mb-2 text-gray-600">Children’s Church                          11:00 am</p>
          <p className="text-xl font-normal mb-2 text-gray-600">Sunday Evening Service               5:45 pm</p>
          <p className="text-xl font-normal mb-2 text-gray-600">Teen Service                                    5:45 pm</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-500">Every Wednesday</h3>
          <p className="text-xl font-normal mb-2 text-gray-600">‍‍tca@visittabernacle.com</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-500">Email Us</h3>
          <p className="text-xl font-normal mb-2 text-gray-600">‍Wednesday Service                             7:00pm</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-blue-500">‍We are at</h3>
          <p className="text-xl font-normal mb-2 text-gray-600">‍929 Springfield Rd</p>
          <p className="text-xl font-normal mb-2 text-gray-600"> Lebanon, MO 65536</p>
          <a href="https://www.google.com/maps/place/Tabernacle+Baptist+Church/@37.6733476,-92.6706705,17z/data=!3m1!4b1!4m6!3m5!1s0x87c539e0a551f449:0x8d0b04d598ca99c8!8m2!3d37.6733476!4d-92.6680956!16s%2Fg%2F11fqk3x97q?entry=ttu" target="_blank">
    <button className="bg-blue-900 h-20 w-50 hover:bg-blue-700 text-white px-4 py-2 rounded px-20 text-xl mt-20">Get Directions</button>
</a>
        </div>


      </div>

      </div>
    </section>
  );
  
  export default ServiceSchedule;
  
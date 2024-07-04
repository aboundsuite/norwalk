const Staff = () => (
    <section id="staff" className="flex items-center justify-center min-h-screen bg-white p-8 text-center">
  <div className="w-full text-center"> 
  <h2 className="text-3xl font-bold mb-4">Our Staff</h2>
      <p className="mb-4">At Tabernacle, we believe that everyone is a child of God...</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <img src="/path/to/image.jpg" alt="Staff Member" className="w-full h-auto rounded mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ps. John Doe</h3>
            <p>His Designation</p>
          </div>
        ))}
      </div>



  </div>
    </section>
  );
  
  export default Staff;
  
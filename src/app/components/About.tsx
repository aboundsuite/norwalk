const About = () => (
    <section id="about" className="flex items-center bg-white p-8 text-center min-h-screen">

      <div className="text-center w-full">
      <h2 className="text-3xl font-bold mb-4">About Tabernacle</h2>
      <p className="mb-4">Tabernacle is a welcoming and inclusive community of faith...</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-2xl font-bold mb-2">Love</h3>
          <p>We believe that God is love...</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-2xl font-bold mb-2">Support</h3>
          <p>We believe in providing support...</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-2xl font-bold mb-2">Community</h3>
          <p>We believe in the power of community...</p>
        </div>
      </div>



      </div>
      
    </section>
  );
  
  export default About;
  
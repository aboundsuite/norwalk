const About = () => (
    <section id="about" className="flex items-center bg-white p-8 text-center min-h-screen">

      <div className="text-center w-90 mx-auto">
      <div className="mb-20">
        <h2 className="font-bold mb-4 text-blue-900 text-5xl">About Tabernacle</h2>
      <p className="mb-4 text-blue-900 opacity-70 text-xl">Tabernacle Baptist Church, An Independent, Bible Believing Baptist Church in the city of Lebanon, MO.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
        <div className="flex bg-blue-900 p-4 rounded h-80 items-center">
          <div className="text-center mx-auto">


          <h3 className="text-2xl font-bold mb-2">Love</h3>
          <p>We believe that God is love...</p>

          </div>
       
        </div>


        <div className="flex bg-blue-900 p-4 rounded h-80 items-center">
          <div className="text-center w-full">


          <h3 className="text-2xl font-bold mb-2">Support</h3>
          <p>We believe in providing support...</p>
          </div>
       
        </div>

        <div className="flex bg-blue-900 p-4 rounded h-80 items-center">
          <div className="text-center w-full">

          <h3 className="text-2xl font-bold mb-2">Community</h3>
          <p>We believe in the power of community...</p>
          </div>
       
        </div>




      </div>



      </div>
      
    </section>
  );
  
  export default About;
  
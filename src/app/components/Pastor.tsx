import React from 'react';

const Pastor = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-white text-black py-40">
      <div className="flex-1 h-full">
        <img
          src="/Pastor_Photo.png"
          alt="Pastor"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-md mx-auto md:max-w-full text-center md:text-left" style={{ maxWidth: '940px' }}>
          <h1 className="text-4xl font-bold mb-4 text-blue-900">Rich Forman</h1>
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Senior Pastor</h3>
          <p className="text-lg text-gray-500 mb-6">
            Pastor Richard Forman has been the Pastor of Norwalk Baptist Church since November 2016. 
            He has been married to his wife Melissa since 1999, and God has blessed them with four daughters. 
            Pastor Forman was saved on November 5 of 2000, and after a revival service in 2005 answered 
            the call to preach the Gospel of Jesus Christ. Through much prayer and council, God led Pastor 
            and his family to The Crown College of the Bible in Powell, Tennessee. It was there that God used 
            Pastor Clarence Sexton, the Temple Baptist Church, and The Crown College to shape and prepare the Formans. 
            It was during this time that Pastor earned his Bachelors degree and since then he has earned a Masters in Ministry. 
            He is now faithfully serving as our Pastor and fellow servant of Jesus Christ.
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white px-8 py-3 rounded text-xl mt-4">
            Meet our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pastor;

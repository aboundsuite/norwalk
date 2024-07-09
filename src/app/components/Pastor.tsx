import React from 'react';

const Pastor = () => {
  return (
    <section className="flex flex-col md:flex-row m-h-screen">
      <div className="flex-1 flex items-center justify-center bg-white">
        <img
          src="/don_ball.jpg"
          alt="Pastor"
          className="object-cover h-full w-full md:h-auto md:w-auto max-w-full max-h-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md mx-auto text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">Don Ball Jr</h1>
          <h3 className="text-2xl font-bold mb-4 text-blue-500">Senior Pastor</h3>
          <p className="text-lg text-gray-500 mb-6">
            Pastor has been in ministry since 1993. He was saved at the age of 6 and was called to preach at the age of 16. 
            After his call to preach, he went to Baptist Bible College in Springfield, Missouri, where he met his wife Kelly and were married in 1993. 
            In 1995, Pastor Ball graduated with a bachelor's degree and was on staff at Tabernacle Baptist Church. 
            He and his wife have been serving the church for over 27 years and he has been the Pastor for over 16 years. 
            Pastor Ball and Mrs. Kelly have four children: Maggie, Caleb, Stephen, and Ben.
          </p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded text-xl mt-4">
            Meet our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pastor;

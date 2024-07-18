import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-white text-black py-20">
      <div className="flex-1 h-full">
        <img
          src="/norwalk_building.png"
          alt="Church Building"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-md mx-auto md:max-w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">A Note From Our Pastor</h2>
          <p className="text-lg mb-6">
            I would like to thank you for visiting our website, and trust it will give you some insight to the belief’s and practices of the Norwalk Baptist Church. 
            I also pray that you will come visit us in person one day, and be my personal guest. You will find that we strive for NBC to be a place where Faith and Family come together! 
            Until that day comes where we can welcome you in person and introduce you to our church family, please explore the online version of NBC. If you have any questions, 
            I would be delighted to answer them for you, and you can do so by emailing me at pastor@norwalkbc.com. 
            You will find many things to look at here, but we believe the most important part is Salvation through faith in Jesus Christ.
          </p>
          <p className="font-bold">Pastor Rich Forman</p>
          <p className="italic">Psalm 145:4</p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Footer = () => (
  <footer className="flex flex-col justify-between bg-custom-dark-blue text-white p-8 h-screen">
    <div className="container mx-auto flex-grow flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <a href='/'><img src='/nbc_logo_green.png' className='w-64 mb-20' alt="Norwalk Baptist Church Logo"></img></a>
          <p>We are glad you have taken the time to visit us! Our church would love for you to be a part of our Norwalk Baptist Church.</p>
        </div>
        <div>
          {/* Empty div for additional content if needed */}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-custom-light-green">Menu</h3>
          <ul>
            <li className="mb-1"><a href="/" className="hover:text-custom-light-green">Home</a></li>
            <li className="mb-1"><a href="/about/#about" className="hover:text-custom-light-green">About</a></li>
            <li className="mb-1"><a href="/ministries" className="hover:text-custom-light-green">Ministries</a></li>
            <li className="mb-1"><a href="#" className="hover:text-custom-light-green">I’m New Here</a></li>
            <li className="mb-1"><a href="#" className="hover:text-custom-light-green">Events</a></li>
            <li className="mb-1"><a href="#" className="hover:text-custom-light-green">Sermons</a></li>
            <li className="mb-1"><a href="/contact" className="hover:text-custom-light-green">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 text-custom-light-green">Location</h3>
            <p>2084 US-20</p>
            <p>West Norwalk, OH 44857</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t border-custom-light-green pt-4 text-center">
      <p>Copyright © Norwalk Baptist Church | Designed by <a href='https://www.achurch.app' className='hover:text-custom-light-green'>A Church App</a></p>
    </div>
  </footer>
);

export default Footer;

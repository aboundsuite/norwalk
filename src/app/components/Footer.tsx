import React from 'react';

const Footer = () => (
  <footer className="flex bg-blue-900 text-white p-8 h-screen items-center">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
        <a href='/'><img src='/logo_white.png' className='w-64 mb-20'></img></a>
          <p>We are glad you have taken the time to visit us! Our church would love for you to be a part of our Tabernacle family.</p>
         
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Menu</h3>
          <ul>
            <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Ministries</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">I’m New Here</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Events</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Sermons</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Location</h3>
          <p>Lebanon, MO</p>
          <p>929 Springfield Rd</p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75"><img src="/icons/facebook.png" alt="Facebook" /></a>
              <a href="#" className="hover:opacity-75"><img src="/icons/twitter.png" alt="Twitter" /></a>
              <a href="#" className="hover:opacity-75"><img src="/icons/instagram.png" alt="Instagram" /></a>
              <a href="#" className="hover:opacity-75"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
              <a href="#" className="hover:opacity-75"><img src="/icons/youtube.png" alt="YouTube" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-blue-100 pt-4 text-center">
        <p>Copyright © Tabernacle Baptist Church | Designed by <a href='www.achurch.app' className='hover:underline'>A Church App </a></p>
      </div>
    </div>
  </footer>
);

export default Footer;

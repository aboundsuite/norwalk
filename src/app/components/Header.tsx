"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-custom-dark-blue p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <a href='/'><img src='/nbc_logo.png' className='w-64' alt="Norwalk Baptist Church Logo"></img></a>
      </div>
      <button
        className="text-2xl text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-custom-dark-blue flex flex-col items-center justify-center space-y-4 text-3xl transition-opacity duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 text-2xl text-white focus:outline-none"
            onClick={closeMenu}
          >
            &times;
          </button>
          <nav>
            <ul className="space-y-4 text-center">
              <li>
                <Link href="/about/#about" legacyBehavior>
                  <a className="text-white hover:text-custom-light-green" onClick={closeMenu}>About us</a>
                </Link>
              </li>
              <li>
                <Link href="/ministries" legacyBehavior>
                  <a className="text-white hover:text-custom-light-green" onClick={closeMenu}>Ministries</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-white hover:text-custom-light-green" onClick={closeMenu}>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#join" legacyBehavior>
                  <a className="text-white hover:text-custom-light-green" onClick={closeMenu}>I’m new here</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

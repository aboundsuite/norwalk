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
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">TABERNACLE</div>
      <button
        className="text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 flex flex-col items-center justify-center space-y-4 text-3xl transition-opacity duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 text-2xl focus:outline-none"
            onClick={closeMenu}
          >
            &times;
          </button>
          <nav>
            <ul className="space-y-4 text-center">
              <li>
                <Link href="#about" onClick={closeMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="#staff" onClick={closeMenu}>
                  Our Staff
                </Link>
              </li>
              <li>
                <Link href="#join" onClick={closeMenu}>
                  I’m new here
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

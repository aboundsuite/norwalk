import Link from 'next/link';

const Header = () => (
  <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">TABERNACLE</div>
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="#about">About us</Link></li>
        <li><Link href="#staff">Our Staff</Link></li>
        <li><Link href="#join">I’m new here</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

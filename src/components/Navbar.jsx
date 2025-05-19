import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('#home');

  const navlinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'AboutUs' },
    { href: '#gg', label: 'OurServices' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-50  backdrop-blur-md shadow-md z-50">
      <div className="container w-full mx-auto flex justify-between items-center px-6 md:px-20 md:h-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer ml-4 md:ml-6 lg:ml-10">
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-4 h-4 -ml-2.5 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-lg font-extrabold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300 ${
                activeLink === link.href
                  ? 'text-blue-500 after:w-full'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
          <a href="#newsletter">Get In Touch</a>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 p-2 hover:text-gray-900 transition-colors duration-300"
        >
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white py-6 z-40 shadow-md">
          <div className="space-y-4 px-6">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-lg font-semibold ${
                  activeLink === link.href? 'text-blue-600': 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="block bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

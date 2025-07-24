import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about-us' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'doctors', label: 'Doctors', path: '/doctors' },
    { id: 'appointments', label: 'News', path: '/appointments' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sky-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@healthcarecenter.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>123 Medical Center Dr, Health City, HC 12345</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to='/' className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">HealthCare Center</h1>
                <p className="text-xs text-gray-500">Excellence in Healthcare</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-2 py-2 rounded-md text-md font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/appointments"
                className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-700 hover:to-green-600 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-sky-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/appointments"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-4 bg-gradient-to-r from-sky-600 to-green-500 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-700 hover:to-green-600 transition-all duration-300 text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

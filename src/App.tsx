import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Appointments from './components/Appointments';
import Contact from './components/Contact';
import HealthDashboard from './components/HealthDashboard';

function App() {
  const [, setCurrentPage] = useState('home'); // ✅ Add this line

  return (
    <Router>
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
          <Route path="/" element={<Homepage onPageChange={setCurrentPage} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services onPageChange={setCurrentPage}/>} />
          <Route path="/doctors" element={<Doctors onPageChange={setCurrentPage}/>} />
          <Route path="/appointments" element={<Appointments onPageChange={setCurrentPage}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<HealthDashboard />} />
        </Routes>
      
      {/* Footer */}
      <footer className="bg-sky-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-sky-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1H+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">HealthCare Center</h3>
                  <p className="text-xs text-gray-400">Excellence in Healthcare</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Providing exceptional healthcare services with compassion and excellence since 1999.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Explore More</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Reviews</button></li>
                <li><button onClick={() => setCurrentPage('appointments')} className="hover:text-white transition-colors">Privacy Policy & Terms</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Cardiology</li>
                <li>Pediatrics</li>
                <li>Internal Medicine</li>
                <li>Emergency Care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>123 Medical Center Dr</p>
                <p>Health City, HC 12345</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@healthcarecenter.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sky-900 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 HealthCare Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
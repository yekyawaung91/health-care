import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Clock, 
  Award,
  Users,
  Stethoscope,
  Calendar,
  Phone,
  Star,
  CrossIcon
} from 'lucide-react';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onPageChange }) => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care and treatment for adult medical conditions.',
      color: 'from-green-500 to-emerald-500',
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award },
    { number: '50+', label: 'Expert Doctors', icon: Users },
    { number: '10,000+', label: 'Happy Patients', icon: Heart },
    { number: '24/7', label: 'Emergency Care', icon: Clock }
  ];

  const news = [
    {
      date: 'Jan 15, 2025',
      title: 'New Cardiac Surgery Wing Opens',
      description: 'State-of-the-art facilities now available for advanced cardiac procedures.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      date: 'Jan 10, 2025',
      title: 'Free Health Screening Campaign',
      description: 'Join our community health initiative for free basic health screenings.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      date: 'Jan 5, 2025',
      title: 'Telemedicine Services Expanded',
      description: 'Now offering virtual consultations for more specialties.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 via-sky-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Health is Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-sky-600">
                  Priority
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 leading-relaxed">
                Providing exceptional healthcare services with compassion, innovation, and excellence for over 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/appointments')}
                  className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar size={20} />
                  Book Appointment
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-sky-600 transition-all duration-300"
                >
                  <Phone size={20} />
                  Emergency: (555) 911-HELP
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4269204/pexels-photo-4269204.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare professionals" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <CrossIcon className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Certified Excellence</p>
                    <p className="text-sm text-gray-600">JCI Accredited Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-green-500 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered by our team of experienced medical professionals using state-of-the-art technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button 
                  onClick={() => onPageChange('services')}
                  className="text-sky-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about our latest developments and health initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-sky-600 font-medium mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            Schedule your appointment today and experience the difference of personalized healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/appointments')}
              className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} />
              Book Your Appointment
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-sky-600 transition-all duration-300"
            >
              <Phone size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Patients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                rating: 5,
                comment: 'Exceptional care and professional staff. The doctors took time to explain everything clearly.',
                treatment: 'Cardiology',
                avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
              },
              {
                name: 'Michael Chen',
                rating: 5,
                comment: 'Outstanding pediatric care for my children. Highly recommend this healthcare center.',
                treatment: 'Pediatrics',
                avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
              },
              {
                name: 'Emily Rodriguez',
                rating: 5,
                comment: 'Modern facilities and compassionate healthcare professionals. Truly impressed.',
                treatment: 'Internal Medicine',
                avatarUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>

                <div className="border-t pt-4 flex items-center gap-4">
                  <img
                    src={testimonial.avatarUrl || '/default-avatar.png'}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.treatment} Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Brain,
  Eye,
  Bone,
  Baby,
  Zap,
  Search,
  Calendar,
  ArrowRight,
  Clock,
  Award,
  Shield
} from 'lucide-react';

interface ServicesProps {
  onPageChange: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const services = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      category: 'specialty',
      icon: Heart,
      description: 'Comprehensive heart care including diagnostics, treatment, and prevention of cardiovascular diseases.',
      features: ['ECG & Stress Testing', 'Cardiac Catheterization', 'Heart Surgery', 'Preventive Cardiology'],
      color: 'from-red-500 to-pink-500',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      category: 'specialty',
      icon: Users,
      description: 'Specialized medical care for infants, children, and adolescents from birth to 18 years.',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring', 'Developmental Assessments'],
      color: 'from-sky-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'internal-medicine',
      title: 'Internal Medicine',
      category: 'primary',
      icon: Stethoscope,
      description: 'Primary care for adults focusing on prevention, diagnosis, and treatment of diseases.',
      features: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings'],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'neurology',
      title: 'Neurology',
      category: 'specialty',
      icon: Brain,
      description: 'Diagnosis and treatment of disorders affecting the nervous system and brain.',
      features: ['Neurological Exams', 'EEG Testing', 'Stroke Care', 'Memory Disorders'],
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'ophthalmology',
      title: 'Ophthalmology',
      category: 'specialty',
      icon: Eye,
      description: 'Complete eye care services including vision correction and eye disease treatment.',
      features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care'],
      color: 'from-amber-500 to-orange-500',
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      category: 'specialty',
      icon: Bone,
      description: 'Treatment of musculoskeletal conditions including bones, joints, and muscles.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'obstetrics',
      title: 'Obstetrics & Gynecology',
      category: 'specialty',
      icon: Baby,
      description: 'Comprehensive women\'s health services including pregnancy care and gynecological treatments.',
      features: ['Prenatal Care', 'Delivery Services', 'Gynecological Exams', 'Family Planning'],
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'emergency',
      title: 'Emergency Medicine',
      category: 'emergency',
      icon: Zap,
      description: '24/7 emergency care for urgent medical conditions and trauma cases.',
      features: ['24/7 Emergency Care', 'Trauma Center', 'Critical Care', 'Ambulance Services'],
      color: 'from-red-600 to-red-500',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'primary', label: 'Primary Care' },
    { id: 'specialty', label: 'Specialties' },
    { id: 'emergency', label: 'Emergency' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Medical Services</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-4xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-sky-600 to-green-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredServices.map((service) => (
    <div
      key={service.id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col"
    >
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 left-4 p-3 bg-gradient-to-r ${service.color} rounded-xl`}>
          <service.icon className="text-white" size={24} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

        <div className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Push buttons to bottom */}
        <div className="mt-auto flex gap-3 pt-4">
          <button
            onClick={() => navigate('/appointments', { state: { serviceTitle: service.title } })}
            className="flex-1 bg-gradient-to-r from-sky-600 to-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar size={16} />
            Book Now
          </button>
          <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference of patient-centered care with our comprehensive approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Quick Access',
                description: 'Same-day appointments available for urgent care needs.',
                color: 'from-sky-500 to-cyan-500'
              },
              {
                icon: Award,
                title: 'Expert Care',
                description: 'Board-certified physicians with years of specialized experience.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Shield,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and modern treatment facilities.',
                color: 'from-purple-500 to-indigo-500'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Schedule Your Care?</h2>
          <p className="text-xl mb-8 text-sky-100">
            Our medical team is ready to provide you with exceptional healthcare services.
          </p>
          <button 
            onClick={() => onPageChange('appointments')}
            className="bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto"
          >
            <Calendar size={20} />
            Book Your Appointment
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
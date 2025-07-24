import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Languages, 
  Award,
  GraduationCap,
  Stethoscope,
  Phone,
  Mail,
  Filter,
  Search
} from 'lucide-react';

interface DoctorsProps {
  onPageChange: (page: string) => void;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  availableDays: string[];
  consultationHours: string;
  location: string;
  phone: string;
  email: string;
  award:boolean;
}

const Doctors: React.FC<DoctorsProps> = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const doctors: Doctor[] = [
    {
      id: 'dr-mitchell',
      name: 'Dr. Sarah Mitchell',
      specialty: 'Cardiology',
      qualifications: ['MD - Harvard Medical School', 'Fellowship in Interventional Cardiology', 'Board Certified Cardiologist'],
      experience: '15+ years',
      languages: ['English', 'Spanish', 'French'],
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/8704152/pexels-photo-8704152.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Mitchell is a leading cardiologist specializing in interventional procedures and heart disease prevention. She has performed over 2,000 cardiac procedures and is recognized for her expertise in complex coronary interventions.',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      consultationHours: '9:00 AM - 5:00 PM',
      location: 'Cardiology Wing, 3rd Floor',
      phone: '+1 (555) 123-4567',
      email: 'sarah.mitchell@healthcarecenter.com',
      award: true
    },
    {
      id: 'dr-rodriguez',
      name: 'Dr. James Rodriguez',
      specialty: 'Pediatrics',
      qualifications: ['MD - Johns Hopkins University', 'Pediatric Residency - Children\'s Hospital', 'Board Certified Pediatrician'],
      experience: '12+ years',
      languages: ['English', 'Spanish'],
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/7966285/pexels-photo-7966285.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Rodriguez is passionate about providing comprehensive care for children from infancy through adolescence. He specializes in developmental pediatrics and has extensive experience in pediatric emergency medicine.',
      availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
      consultationHours: '8:00 AM - 6:00 PM',
      location: 'Pediatrics Department, 2nd Floor',
      phone: '+1 (555) 123-4568',
      email: 'james.rodriguez@healthcarecenter.com',
      award: true
    },
    {
      id: 'dr-chen',
      name: 'Dr. Emily Chen',
      specialty: 'Internal Medicine',
      qualifications: ['MD - Stanford Medical School', 'Internal Medicine Residency', 'Board Certified Internist'],
      experience: '10+ years',
      languages: ['English', 'Mandarin', 'Cantonese'],
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/4687172/pexels-photo-4687172.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Chen focuses on preventive medicine and chronic disease management. She is known for her holistic approach to patient care and has published numerous research papers on diabetes management and cardiovascular health.',
      availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
      consultationHours: '9:00 AM - 4:00 PM',
      location: 'Internal Medicine, 1st Floor',
      phone: '+1 (555) 123-4569',
      email: 'emily.chen@healthcarecenter.com',
      award: false
    },
    {
      id: 'dr-thompson',
      name: 'Dr. Michael Thompson',
      specialty: 'Emergency Medicine',
      qualifications: ['MD - Mayo Clinic', 'Emergency Medicine Residency', 'Board Certified Emergency Physician'],
      experience: '10+ years',
      languages: ['English'],
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/8413164/pexels-photo-8413164.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Thompson is an experienced emergency physician who has handled thousands of critical cases. He specializes in trauma care and emergency procedures, and is certified in advanced cardiac life support.',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      consultationHours: '24/7 Emergency Coverage',
      location: 'Emergency Department',
      phone: '+1 (555) 911-HELP',
      email: 'michael.thompson@healthcarecenter.com',
      award: true
    },
    {
      id: 'dr-patel',
      name: 'Dr. Priya Patel',
      specialty: 'Neurology',
      qualifications: ['MD - University of Pennsylvania', 'Neurology Residency', 'Fellowship in Stroke Medicine'],
      experience: '14+ years',
      languages: ['English', 'Hindi', 'Gujarati'],
      rating: 4.8,
      reviews: 94,
      image: 'https://images.pexels.com/photos/17891764/pexels-photo-17891764.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Patel specializes in stroke medicine and neurological disorders. She has extensive experience in treating conditions such as epilepsy, multiple sclerosis, and movement disorders.',
      availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      consultationHours: '10:00 AM - 4:00 PM',
      location: 'Neurology Department, 4th Floor',
      phone: '+1 (555) 123-4570',
      email: 'priya.patel@healthcarecenter.com',
      award: false
    },
    {
      id: 'dr-williams',
      name: 'Dr. Robert Williams',
      specialty: 'Orthopedics',
      qualifications: ['MD - Duke University', 'Orthopedic Surgery Residency', 'Sports Medicine Fellowship'],
      experience: '16+ years',
      languages: ['English'],
      rating: 4.9,
      reviews: 112,
      image: 'https://images.pexels.com/photos/8376329/pexels-photo-8376329.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Williams is an orthopedic surgeon specializing in sports medicine and joint replacement. He has performed over 1,500 successful surgeries and is known for his minimally invasive techniques.',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
      consultationHours: '8:00 AM - 3:00 PM',
      location: 'Orthopedics Department, 3rd Floor',
      phone: '+1 (555) 123-4571',
      email: 'robert.williams@healthcarecenter.com',
      award: true
    },
    {
      id: 'dr-ramirez',
      name: 'Dr. Sofia Ramirez',
      specialty: 'Cardiology',
      qualifications: ['MD - Stanford University', 'Cardiology Fellowship - Mayo Clinic'],
      experience: '12+ years',
      languages: ['English', 'Spanish'],
      rating: 4.8,
      reviews: 94,
      image: 'https://images.pexels.com/photos/32115905/pexels-photo-32115905.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Ramirez is a cardiologist passionate about preventive heart care and advanced imaging. She works closely with patients to develop customized heart health plans.',
      availableDays: ['Monday', 'Wednesday', 'Thursday'],
      consultationHours: '9:00 AM - 4:00 PM',
      location: 'Cardiology Department, 2nd Floor',
      phone: '+1 (555) 456-7890',
      email: 'sofia.ramirez@healthcarecenter.com',
      award: true
    },
    {
      id: 'dr-khan',
      name: 'Dr. Amir Khan',
      specialty: 'Neurology',
      qualifications: ['MBBS - University of London', 'Neurology Residency - Johns Hopkins'],
      experience: '10+ years',
      languages: ['English', 'Urdu'],
      rating: 4.7,
      reviews: 87,
      image: 'https://images.pexels.com/photos/27298085/pexels-photo-27298085.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Khan is a neurologist focusing on movement disorders, epilepsy, and stroke recovery. He combines diagnostics and therapy to improve patient outcomes.',
      availableDays: ['Tuesday', 'Thursday', 'Friday'],
      consultationHours: '10:00 AM - 5:00 PM',
      location: 'Neurology Wing, 4th Floor',
      phone: '+1 (555) 234-5678',
      email: 'amir.khan@healthcarecenter.com',
      award: false
    },
    {
    id: 'dr-bennett',
    name: 'Dr. Olivia Bennett',
    specialty: 'Pediatrics',
    qualifications: ['MD - Harvard Medical School', 'Pediatric Residency - Boston Children’s Hospital'],
    experience: '8+ years',
    languages: ['English'],
    rating: 4.9,
    reviews: 121,
    image: 'https://images.pexels.com/photos/7108277/pexels-photo-7108277.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dr. Bennett provides comprehensive care for infants, children, and adolescents. She is known for her patient-centered approach and child-friendly environment.',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
    consultationHours: '8:30 AM - 2:00 PM',
    location: 'Pediatrics Section, Ground Floor',
    phone: '+1 (555) 987-6543',
    email: 'olivia.bennett@healthcarecenter.com',
    award: true
  }
  ];

  const specialties = [
    'all',
    'Cardiology',
    'Pediatrics',
    'Internal Medicine',
    'Emergency Medicine',
    'Neurology',
    'Orthopedics'
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Medical Team</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-4xl mx-auto">
              Meet our experienced physicians and healthcare professionals dedicated to your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                <Filter size={20}/>
                <span>Filtered:</span>
              </div>
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedSpecialty === specialty
                      ? 'bg-gradient-to-r from-sky-600 to-green-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl flex flex-row font-bold text-gray-800 mb-2">
                    <span className="flex justify-between items-center w-full">
                      {doctor.name}
                      {doctor.award && <Award className='text-green-600'/>}
                    </span>
                  </h3>
                  <p className="text-sky-600 font-semibold mb-3">{doctor.specialty}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <GraduationCap size={16} />
                      <span>{doctor.qualifications[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Stethoscope size={16} />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Languages size={16} />
                      <span>{doctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>{doctor.consultationHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star size={16} />
                      <span>{doctor.reviews} patient reviews</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => onPageChange('appointments')}
                      className="flex-1 bg-gradient-to-r from-sky-600 to-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Calendar size={16} />
                      Book Now
                    </button>
                    <button 
                      onClick={() => setSelectedDoctor(doctor)}
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Doctor Profile</h2>
                <button 
                  onClick={() => setSelectedDoctor(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name}
                    className="w-full rounded-xl mb-4"
                  />
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>{selectedDoctor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>{selectedDoctor.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{selectedDoctor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedDoctor.name}</h3>
                  <p className="text-sky-600 font-semibold text-lg mb-4">{selectedDoctor.specialty}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <GraduationCap size={18} />
                        Qualifications
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {selectedDoctor.qualifications.map((qual, index) => (
                          <li key={index}>• {qual}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Languages size={18} />
                        Languages
                      </h4>
                      <p className="text-sm text-gray-600">{selectedDoctor.languages.join(', ')}</p>
                      
                      <h4 className="font-semibold text-gray-800 mb-3 mt-4 flex items-center gap-2">
                        <Clock size={18} />
                        Schedule
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{selectedDoctor.consultationHours}</p>
                      <p className="text-sm text-gray-600">Available: {selectedDoctor.availableDays.join(', ')}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">About</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedDoctor.bio}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-400 fill-current" size={20} />
                      <span className="font-semibold">{selectedDoctor.rating}</span>
                      <span className="text-gray-600">({selectedDoctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Stethoscope size={16} />
                      <span>{selectedDoctor.experience} experience</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setSelectedDoctor(null);
                      onPageChange('appointments');
                    }}
                    className="w-full bg-gradient-to-r from-sky-600 to-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Calendar size={20} />
                    Book Appointment with {selectedDoctor.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
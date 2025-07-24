import React from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  Target,
  Shield,
  Globe,
  BookOpen,
  Stethoscope
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards in medical care, safety, and professional service.',
      color: 'from-sky-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Our multidisciplinary team works together to provide comprehensive patient care.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and evidence-based practices for better outcomes.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Mitchell',
      specialty: 'Chief of Cardiology',
      experience: '15+ years',
      education: 'MD, Harvard Medical School',
      image: 'https://images.pexels.com/photos/8704152/pexels-photo-8704152.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specializes in interventional cardiology and heart disease prevention.'
    },
    {
      name: 'Dr. James Rodriguez',
      specialty: 'Pediatric Specialist',
      experience: '12+ years',
      education: 'MD, Johns Hopkins University',
      image: 'https://images.pexels.com/photos/7966285/pexels-photo-7966285.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in childhood development and pediatric emergency medicine.'
    },
    {
      name: 'Dr. Emily Chen',
      specialty: 'Internal Medicine',
      experience: '10+ years',
      education: 'MD, Stanford Medical School',
      image: 'https://images.pexels.com/photos/4687172/pexels-photo-4687172.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Focuses on preventive care and chronic disease management.'
    },
    {
      name: 'Dr. Michael Thompson',
      specialty: 'Emergency Medicine',
      experience: '10+ years',
      education: 'MD, Mayo Clinic',
      image: 'https://images.pexels.com/photos/8413164/pexels-photo-8413164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Board-certified in emergency medicine and trauma care.'
    }
  ];

  const certifications = [
    {
      title: 'Joint Commission Accreditation',
      description: 'Gold Seal of Approval for quality and safety',
      icon: Award
    },
    {
      title: 'Magnet Recognition',
      description: 'Excellence in nursing services and patient care',
      icon: Shield
    },
    {
      title: 'ISO 9001:2015 Certified',
      description: 'International quality management standards',
      icon: Globe
    },
    {
      title: 'AAAHC Accredited',
      description: 'Ambulatory healthcare quality standards',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About HealthCare Center</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-4xl mx-auto">
              Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide exceptional, patient-centered healthcare services that improve the health and wellbeing of our community. We are committed to delivering compassionate care through innovative medical practices, advanced technology, and a dedicated team of healthcare professionals.
              </p>
              <div className="bg-sky-50 p-6 rounded-xl border-l-4 border-sky-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading healthcare provider in our region, recognized for excellence in patient care, medical innovation, and community health improvement.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4269204/pexels-photo-4269204.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over two decades of serving our community with dedication and excellence.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 to-green-500 rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '1999',
                  title: 'Foundation',
                  description: 'HealthCare Center was established with a vision to provide quality healthcare to our community.'
                },
                {
                  year: '2005',
                  title: 'Expansion',
                  description: 'Added specialized departments including Cardiology and Pediatrics with state-of-the-art equipment.'
                },
                {
                  year: '2012',
                  title: 'Accreditation',
                  description: 'Received Joint Commission accreditation, recognizing our commitment to quality and safety.'
                },
                {
                  year: '2018',
                  title: 'Digital Innovation',
                  description: 'Launched telemedicine services and electronic health records for better patient care.'
                },
                {
                  year: '2024',
                  title: 'Modern Facilities',
                  description: 'Opened new cardiac surgery wing and expanded emergency department capabilities.'
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-sky-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-6 h-6 bg-white border-4 border-sky-500 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Medical Team</h2>
            <p className="text-xl text-gray-600">
              Our experienced physicians and healthcare professionals are dedicated to your wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                  <p className="text-sky-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-3">{doctor.education}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Stethoscope size={16} />
                    <span>{doctor.experience} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Certifications & Awards</h2>
            <p className="text-xl text-gray-600">
              Recognized for our commitment to quality, safety, and excellence in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-green-500 rounded-xl mb-4">
                  <cert.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
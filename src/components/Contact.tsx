import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertTriangle,
  Car,
  Bus,
  Navigation
} from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Medical Center Drive', 'Health City, HC 12345', 'United States'],
      color: 'from-sky-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Main: +1 (555) 123-4567', 'Emergency: +1 (555) 911-HELP', 'Appointments: +1 (555) 123-BOOK'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@healthcarecenter.com', 'appointments@healthcarecenter.com', 'emergency@healthcarecenter.com'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 8:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: Emergency Only'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const departments = [
    { name: 'General Information', phone: '+1 (555) 123-4567', ext: 'ext. 100' },
    { name: 'Appointments', phone: '+1 (555) 123-BOOK', ext: 'ext. 200' },
    { name: 'Emergency Department', phone: '+1 (555) 911-HELP', ext: '24/7' },
    { name: 'Billing & Insurance', phone: '+1 (555) 123-4567', ext: 'ext. 300' },
    { name: 'Medical Records', phone: '+1 (555) 123-4567', ext: 'ext. 400' },
    { name: 'Patient Relations', phone: '+1 (555) 123-4567', ext: 'ext. 500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-4xl mx-auto">
              We're here to help. Reach out to us for appointments, questions, or emergency care.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle size={24} />
            <span className="font-semibold text-lg">
              For Medical Emergencies, Call 911 or +1 (555) 911-HELP
            </span>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl mb-4`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Appointment Inquiry</option>
                        <option value="billing">Billing Question</option>
                        <option value="medical-records">Medical Records</option>
                        <option value="insurance">Insurance Question</option>
                        <option value="feedback">Feedback/Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Please describe your inquiry or concern..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Medical Center Drive, Health City, HC 12345</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Directions & Parking</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Car className="text-sky-600" size={20} />
                      <span className="text-sm text-gray-600">Free parking available in our main lot</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bus className="text-green-600" size={20} />
                      <span className="text-sm text-gray-600">Bus routes 15, 22, and 45 stop nearby</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Navigation className="text-purple-600" size={20} />
                      <span className="text-sm text-gray-600">GPS coordinates: 40.7128° N, 74.0060° W</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
                <div className="space-y-4">
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <Phone className="text-sky-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Now</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@healthcarecenter.com" 
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-sm text-gray-600">info@healthcarecenter.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Department Directory</h2>
            <p className="text-xl text-gray-600">
              Direct contact information for specific departments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-gray-800 mb-3">{dept.name}</h4>
                <div className="flex items-center gap-2 text-sky-600">
                  <Phone size={16} />
                  <span className="font-medium">{dept.phone}</span>
                  <span className="text-gray-500 text-sm">{dept.ext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Emergency Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Emergency Department is open 24/7 to handle urgent medical situations. 
              For life-threatening emergencies, please call 911 immediately.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Emergency Department</h4>
                <p className="text-red-600 font-bold text-lg">+1 (555) 911-HELP</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Non-Emergency Urgent Care</h4>
                <p className="text-sky-600 font-bold text-lg">+1 (555) 123-URGENT</p>
                <p className="text-sm text-gray-600">8 AM - 10 PM Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
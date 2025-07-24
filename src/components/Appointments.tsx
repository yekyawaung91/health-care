import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

interface AppointmentsProps {
  onPageChange: (page: string) => void;
}

interface AppointmentForm {
  service: string;
  doctor: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  reason: string;
  insurance: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const Appointments: React.FC<AppointmentsProps> = ({ onPageChange }) => {
  const location = useLocation();
  const passedTitle = location.state?.serviceTitle;
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AppointmentForm>({
    service: '',
    doctor: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
    insurance: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const services = [
    'Cardiology',
    'Pediatrics',
    'Internal Medicine',
    'Neurology',
    'Orthopedics',
    'Emergency Medicine',
    'Obstetrics & Gynecology',
    'Ophthalmology'
  ];

  const doctors = {
    'Cardiology': ['Dr. Sarah Mitchell','Dr. Sofia Ramirez'],
    'Pediatrics': ['Dr. James Rodriguez','Dr. Olivia Bennett'],
    'Internal Medicine': ['Dr. Emily Chen'],
    'Neurology': ['Dr. Priya Patel','Dr. Amir Khan'],
    'Orthopedics': ['Dr. Robert Williams'],
    'Emergency Medicine': ['Dr. Michael Thompson'],
    'Obstetrics & Gynecology': ['Dr. Lisa Anderson'],
    'Ophthalmology': ['Dr. David Kim']
  };

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const insuranceProviders = [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'UnitedHealth',
    'Kaiser Permanente',
    'Humana',
    'Medicare',
    'Medicaid',
    'Self-Pay',
    'Other'
  ];

  // Set passed serviceTitle on mount
  useEffect(() => {
    if (passedTitle) {
      setFormData((prev) => ({ ...prev, service: passedTitle }));
    }
  }, [passedTitle]);

  const handleInputChange = (field: keyof AppointmentForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);
    return maxDate.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-sky-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Appointment Confirmed!</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for booking your appointment with us. We've sent a confirmation email to <strong>{formData.email}</strong> with all the details.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Appointment Details:</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Service:</strong> {formData.service}</p>
              <p><strong>Doctor:</strong> {formData.doctor}</p>
              <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Patient:</strong> {formData.firstName} {formData.lastName}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  service: '',
                  doctor: '',
                  date: '',
                  time: '',
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  dateOfBirth: '',
                  reason: '',
                  insurance: '',
                  emergencyContact: '',
                  emergencyPhone: ''
                });
              }}
              className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300"
            >
              Book Another Appointment
            </button>
            <button 
              onClick={() => onPageChange('home')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-green-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-sky-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-xl text-sky-100">
            Schedule your visit with our experienced medical professionals
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step 
                  ? 'bg-sky-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-sky-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentStep === 1 && 'Select Service & Doctor'}
            {currentStep === 2 && 'Choose Date & Time'}
            {currentStep === 3 && 'Patient Information'}
          </h2>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Service & Doctor Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Medical Service *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleInputChange('service', service)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        formData.service === service
                          ? 'border-sky-500 bg-sky-50 text-sky-700'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-semibold">{service}</div>
                    </button>
                  ))}
                </div>
              </div>

              {formData.service && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Doctor *
                  </label>
                  <div className="space-y-3">
                    {doctors[formData.service as keyof typeof doctors]?.map((doctor) => (
                      <button
                        key={doctor}
                        onClick={() => handleInputChange('doctor', doctor)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.doctor === doctor
                            ? 'border-sky-500 bg-sky-50 text-sky-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-semibold">{doctor}</div>
                        <div className="text-sm text-gray-600">{formData.service} Specialist</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.service || !formData.doctor}
                  className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={getMinDate()}
                  max={getMaxDate()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              {formData.date && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Time *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange('time', time)}
                        className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                          formData.time === time
                            ? 'border-sky-500 bg-sky-50 text-sky-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.date || !formData.time}
                  className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Patient Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Insurance Provider
                  </label>
                  <select
                    value={formData.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Select insurance provider</option>
                    {insuranceProviders.map((provider) => (
                      <option key={provider} value={provider}>{provider}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => handleInputChange('reason', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Please describe your symptoms or reason for the appointment"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Emergency contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Emergency contact phone"
                  />
                </div>
              </div>

              <div className="bg-sky-50 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-sky-600 mt-1" size={20} />
                  <div className="text-sm text-sky-800">
                    <p className="font-semibold mb-1">Important Notes:</p>
                    <ul className="space-y-1">
                      <li>• Please arrive 15 minutes before your appointment</li>
                      <li>• Bring a valid ID and insurance card</li>
                      <li>• You will receive a confirmation email shortly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.dateOfBirth}
                  className="bg-gradient-to-r from-sky-600 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
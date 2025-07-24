import React, { useState } from 'react';
import { 
  Heart, 
  Droplets, 
  Footprints, 
  Weight, 
  Plus, 
  TrendingUp,
  Target,
  Calendar
} from 'lucide-react';

interface HealthData {
  bmi: number;
  weight: number;
  height: number;
  waterIntake: number;
  stepCount: number;
  date: string;
}

interface WeightEntry {
  date: string;
  weight: number;
}

const HealthDashboard: React.FC = () => {
  const [healthData, setHealthData] = useState<HealthData>({
    bmi: 22.5,
    weight: 70,
    height: 175,
    waterIntake: 6,
    stepCount: 8450,
    date: new Date().toISOString().split('T')[0]
  });

  const [weightHistory] = useState<WeightEntry[]>([
    { date: '2024-01-01', weight: 72 },
    { date: '2024-01-08', weight: 71.5 },
    { date: '2024-01-15', weight: 71 },
    { date: '2024-01-22', weight: 70.5 },
    { date: '2024-01-29', weight: 70 },
  ]);

  const [showLogModal, setShowLogModal] = useState(false);
  const [newData, setNewData] = useState({
    weight: '',
    waterIntake: '',
    stepCount: ''
  });

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { status: 'Underweight', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (bmi < 25) return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
    if (bmi < 30) return { status: 'Overweight', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { status: 'Obese', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const waterGoal = 8; // glasses
  const stepGoal = 10000;
  const waterProgress = (healthData.waterIntake / waterGoal) * 100;
  const stepProgress = (healthData.stepCount / stepGoal) * 100;

  const handleLogData = () => {
    if (newData.weight) {
      const weight = parseFloat(newData.weight);
      const bmi = weight / Math.pow(healthData.height / 100, 2);
      setHealthData(prev => ({
        ...prev,
        weight,
        bmi: parseFloat(bmi.toFixed(1)),
        waterIntake: newData.waterIntake ? parseInt(newData.waterIntake) : prev.waterIntake,
        stepCount: newData.stepCount ? parseInt(newData.stepCount) : prev.stepCount
      }));
    }
    setNewData({ weight: '', waterIntake: '', stepCount: '' });
    setShowLogModal(false);
  };

  const bmiInfo = getBMIStatus(healthData.bmi);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Health Dashboard
          </h1>
          <p className="text-gray-600 flex items-center gap-2">
            <Calendar size={16} />
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Health Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* BMI Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Heart className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">BMI</h3>
                  <p className="text-sm text-gray-500">Body Mass Index</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-gray-800">
                {healthData.bmi}
              </div>
              <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${bmiInfo.bg} ${bmiInfo.color}`}>
                {bmiInfo.status}
              </div>
              <div className="text-sm text-gray-600">
                Weight: {healthData.weight}kg • Height: {healthData.height}cm
              </div>
            </div>
          </div>

          {/* Water Intake Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Droplets className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Water Intake</h3>
                  <p className="text-sm text-gray-500">Daily hydration</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-800">
                {healthData.waterIntake}<span className="text-lg text-gray-500">/{waterGoal}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(waterProgress, 100)}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                {Math.round(waterProgress)}% of daily goal
              </div>
            </div>
          </div>

          {/* Step Count Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Footprints className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Steps</h3>
                  <p className="text-sm text-gray-500">Daily activity</p>
                </div>
              </div>
              <Target className="text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-800">
                {healthData.stepCount.toLocaleString()}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(stepProgress, 100)}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                {Math.round(stepProgress)}% of {stepGoal.toLocaleString()} goal
              </div>
            </div>
          </div>
        </div>

        {/* Weight Progress Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Weight className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Weight Progress</h3>
                <p className="text-sm text-gray-500">Last 5 weeks</p>
              </div>
            </div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="weightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#4F46E5', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1={80 + (i * 60)}
                  y1="20"
                  x2={80 + (i * 60)}
                  y2="160"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              ))}
              
              {/* Chart line */}
              <polyline
                points={weightHistory.map((entry, index) => 
                  `${80 + (index * 60)},${160 - ((entry.weight - 68) * 40)}`
                ).join(' ')}
                fill="none"
                stroke="#4F46E5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Chart area */}
              <polygon
                points={`80,160 ${weightHistory.map((entry, index) => 
                  `${80 + (index * 60)},${160 - ((entry.weight - 68) * 40)}`
                ).join(' ')} 320,160`}
                fill="url(#weightGradient)"
              />
              
              {/* Data points */}
              {weightHistory.map((entry, index) => (
                <circle
                  key={index}
                  cx={80 + (index * 60)}
                  cy={160 - ((entry.weight - 68) * 40)}
                  r="4"
                  fill="#4F46E5"
                  stroke="white"
                  strokeWidth="2"
                />
              ))}
              
              {/* Labels */}
              {weightHistory.map((entry, index) => (
                <text
                  key={index}
                  x={80 + (index * 60)}
                  y="185"
                  textAnchor="middle"
                  className="fill-gray-500 text-xs"
                >
                  {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </text>
              ))}
            </svg>
          </div>
        </div>

        {/* Log New Data Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowLogModal(true)}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus size={20} />
            Log New Health Data
          </button>
        </div>

        {/* Modal */}
        {showLogModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Log Health Data</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={newData.weight}
                    onChange={(e) => setNewData(prev => ({ ...prev, weight: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter weight"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Water Intake (glasses)
                  </label>
                  <input
                    type="number"
                    value={newData.waterIntake}
                    onChange={(e) => setNewData(prev => ({ ...prev, waterIntake: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter water intake"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Step Count
                  </label>
                  <input
                    type="number"
                    value={newData.stepCount}
                    onChange={(e) => setNewData(prev => ({ ...prev, stepCount: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter step count"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowLogModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogData}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthDashboard;
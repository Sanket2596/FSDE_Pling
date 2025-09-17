import React, { useState, useEffect } from 'react';

interface RunningMapScreenProps {
  onBack: () => void;
}

const RunningMapScreen: React.FC<RunningMapScreenProps> = ({ onBack }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 32, seconds: 12 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          let newSeconds = prevTime.seconds + 1;
          let newMinutes = prevTime.minutes;
          let newHours = prevTime.hours;

          if (newSeconds >= 60) {
            newSeconds = 0;
            newMinutes += 1;
          }
          if (newMinutes >= 60) {
            newMinutes = 0;
            newHours += 1;
          }

          return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col w-full">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-sm text-gray-600">
        <span className="font-medium">09:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={onBack} className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-green-300 rounded-full"></div>
            </div>
            <div className="w-16 h-1 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-gray-500">My Route</p>
            <h1 className="text-lg font-bold text-gray-900">Running to Hyde Park</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon 5</span>
              <span>11:00 AM</span>
            </div>
          </div>
        </div>
        
        <div className="w-6"></div>
      </div>

      {/* Map Section */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-blue-50 rounded-t-3xl overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0">
            {/* Water bodies */}
            <div className="absolute top-4 right-8 w-16 h-12 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-8 left-4 w-20 h-8 bg-blue-200 rounded-full opacity-60"></div>
            
            {/* Roads */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
            
            {/* Green Park Area */}
            <div className="absolute left-4 top-1/4 w-24 h-32 bg-green-200 rounded-lg opacity-60"></div>
            
            {/* Running Route - Blue Line */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  d="M80 20 Q60 40 40 60 Q20 80 30 90"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Start Point */}
                <circle cx="80" cy="20" r="3" fill="#3B82F6" />
                {/* Current Position */}
                <circle cx="30" cy="90" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />
                {/* Waypoint */}
                <circle cx="40" cy="60" r="2" fill="#10B981" />
              </svg>
            </div>
            
            {/* User Avatar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="px-6 py-4">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {/* Calories Card */}
          <div className="flex-shrink-0 w-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-2xl font-bold">310</div>
              <div className="text-sm text-blue-100">Calories</div>
            </div>
          </div>
          
          {/* Heart Rate Card */}
          <div className="flex-shrink-0 w-32 bg-white rounded-xl p-4 border border-gray-200">
            <div className="text-2xl mb-1">❤️</div>
            <div className="text-2xl font-bold text-gray-900">98</div>
            <div className="text-sm text-gray-600">Heart Rate</div>
          </div>
          
          {/* Steps Card */}
          <div className="flex-shrink-0 w-32 bg-white rounded-xl p-4 border border-gray-200">
            <div className="text-2xl mb-1">👟</div>
            <div className="text-2xl font-bold text-gray-900">2.123</div>
            <div className="text-sm text-gray-600">Steps</div>
          </div>
        </div>
      </div>

      {/* Timer and Controls */}
      <div className="px-6 py-4 bg-white border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-gray-900">
              {formatTime(time.hours)} : {formatTime(time.minutes)} : {formatTime(time.seconds)}
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="text-lg">2,7 km</span>
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            {isRunning ? (
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-1 h-4 bg-white rounded-full"></div>
                <div className="w-1 h-4 bg-white rounded-full ml-1"></div>
              </div>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RunningMapScreen;

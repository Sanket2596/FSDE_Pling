import React, { useState, useEffect, useCallback } from 'react';

interface RunningMapScreenProps {
  onBack: () => void;
}

const RunningMapScreen: React.FC<RunningMapScreenProps> = ({ onBack }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggleRunning = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col w-full">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-sm text-gray-900">
        <span className="font-medium">09:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        </div>
      </div>

      {/* Header with Route Info */}
      <div className="bg-white flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-gray-900 text-sm font-medium">My Route</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Route Details */}
      <div className="bg-white px-6 pb-4">
        <div className="text-gray-900">
          <h1 className="text-lg font-bold">Running to Hyde Park</h1>
          <p className="text-sm text-gray-600">Mon 5 11:00 AM</p>
        </div>
      </div>

      {/* Full Screen Map */}
      <div className="flex-1 relative bg-gray-100">
        {/* Map Background */}
        <div className="absolute inset-0">
          {/* Water body */}
          <div className="absolute top-8 right-16 w-32 h-24 bg-blue-200 rounded-full opacity-60"></div>
          
          {/* Roads */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300"></div>
          
          {/* Green Park Areas */}
          <div className="absolute left-8 top-1/4 w-48 h-64 bg-green-200 rounded-lg opacity-60"></div>
          <div className="absolute right-8 bottom-1/4 w-32 h-48 bg-green-200 rounded-lg opacity-60"></div>
          
          {/* Running Route Path - Blue line with markers */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 400 800" fill="none">
              {/* Route line */}
              <path 
                d="M200,100 Q300,200 200,300 T200,500 Q100,600 200,700" 
                stroke="#3B82F6" 
                strokeWidth="6" 
                fill="none"
              />
              {/* Start point - Blue circle */}
              <circle cx="200" cy="100" r="8" fill="#3B82F6" />
              {/* Middle point - Green circle */}
              <circle cx="200" cy="400" r="8" fill="#10B981" />
              {/* End point - Blue circle */}
              <circle cx="200" cy="700" r="8" fill="#3B82F6" />
            </svg>
          </div>
          
          {/* User Avatar with teardrop pin */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Teardrop pin background */}
              <div className="w-16 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                {/* User avatar */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              {/* Pin point */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Cards - Horizontal Scrollable */}
      <div className="px-6 pb-4">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
          {/* Calories Card */}
          <div className="flex-shrink-0 w-24 bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="text-2xl mb-2 text-blue-500">🔥</div>
              <div className="text-lg font-bold text-gray-900">310</div>
              <div className="text-xs text-gray-500">Calories</div>
            </div>
          </div>
          
          {/* Heart Rate Card */}
          <div className="flex-shrink-0 w-24 bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="text-2xl mb-2 text-gray-500">📈</div>
              <div className="text-lg font-bold text-gray-900">98</div>
              <div className="text-xs text-gray-500">Heart Rate</div>
            </div>
          </div>
          
          {/* Steps Card */}
          <div className="flex-shrink-0 w-24 bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="text-2xl mb-2 text-gray-500">👟</div>
              <div className="text-lg font-bold text-gray-900">2.123</div>
              <div className="text-xs text-gray-500">Steps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Timer and Controls - Bottom */}
      <div className="px-6 pb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Timer Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 text-gray-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 font-medium">Timer</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{formatTime(time)}</div>
            </div>
            
            {/* Distance and Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">2,7 km</span>
                <div className="w-4 h-4 text-green-500">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Pause/Play Button */}
              <button
                onClick={handleToggleRunning}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isRunning 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isRunning ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningMapScreen;
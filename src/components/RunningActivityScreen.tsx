import React, { useState } from 'react';
import RunningMapScreen from './RunningMapScreen';

interface RunningActivityScreenProps {
  onBack: () => void;
}

const RunningActivityScreen: React.FC<RunningActivityScreenProps> = ({ onBack }) => {
  const [showMapScreen, setShowMapScreen] = useState(false);

  const handleFullscreenClick = () => {
    setShowMapScreen(true);
  };

  const handleBackFromMap = () => {
    setShowMapScreen(false);
  };

  if (showMapScreen) {
    return <RunningMapScreen onBack={handleBackFromMap} />;
  }

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
          <h1 className="text-lg font-semibold text-gray-900">Activity tracking</h1>
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Running
          </div>
        </div>
        
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-24">
        {/* Title and Date */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Enjoy your running routine</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Today, 5 March 2023</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative mb-6">
          <div className="bg-blue-50 rounded-2xl h-80 relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0">
              {/* Water body */}
              <div className="absolute top-4 right-8 w-16 h-12 bg-blue-200 rounded-full opacity-60"></div>
              
              {/* Roads */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
              
              {/* Green Park Area */}
              <div className="absolute left-4 top-1/4 w-24 h-32 bg-green-200 rounded-lg opacity-60"></div>
              
              {/* User Location Marker */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fullscreen Button */}
            <button 
              onClick={handleFullscreenClick}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
          
          {/* Today Run Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Today Run</h3>
                  <div className="flex items-center space-x-4 text-lg font-bold text-gray-900">
                    <span>10.4 km</span>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <span>2:23:45 time</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Your habits Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-0">
            <h3 className="text-lg font-semibold text-gray-900">Your habits</h3>
            <div className="flex items-center space-x-1 text-blue-600">
              <span className="text-sm font-medium">See all</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-0.5 -mx-6">
            {/* Calories Burn Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-none p-4 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="text-2xl">🔥</div>
                  <span className="text-sm font-medium text-blue-100">Calories Burn</span>
                </div>
                <div className="text-2xl font-bold">310 kcal</div>
              </div>
              {/* Wave pattern background */}
              <div className="absolute bottom-0 right-0 w-20 h-16 opacity-20">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path d="M0,25 Q25,10 50,25 T100,25 V50 H0 Z" fill="white" />
                </svg>
              </div>
            </div>
            
            {/* Heart Rate Card */}
            <div className="bg-white rounded-none p-4 border border-gray-200 relative overflow-hidden">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-2xl">❤️</div>
                <span className="text-sm font-medium text-gray-600">Heart Rate</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">98 bpm</div>
              {/* Wave pattern background */}
              <div className="absolute bottom-0 right-0 w-20 h-16 opacity-10">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path d="M0,25 Q25,10 50,25 T100,25 V50 H0 Z" fill="gray" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningActivityScreen;

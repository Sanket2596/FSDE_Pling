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

      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
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
        
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6">
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
          <div className="bg-gray-100 rounded-2xl h-80 relative overflow-hidden">
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
                <div className="flex items-center space-x-3">
                  {/* Green vertical line with circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-0.5 h-6 bg-green-500"></div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-sm text-gray-500">Today Run</h3>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">10.4</div>
                        <div className="text-sm text-gray-500">km</div>
                      </div>
                      
                      <div className="w-px h-8 bg-gray-300"></div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">2:23:45</div>
                        <div className="text-sm text-gray-500">time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Your habits Section */}
        <div className="flex-1 flex flex-col" style={{width: '327px', height: '272px'}}>
          <div className="flex items-center justify-between mb-4 px-0">
            <h3 className="text-lg font-semibold text-gray-900">Your habits</h3>
            <div className="flex items-center space-x-1 text-blue-600">
              <span className="text-sm font-medium">See all</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6" style={{gap: '16px'}}>
            {/* Calories Burn Card - Blue */}
            <div className="flex-shrink-0 w-32 h-32 bg-blue-500 rounded-xl p-3 text-white relative overflow-hidden flex flex-col" style={{boxShadow: '0px 4px 20px -2px rgba(50, 50, 71, 0.05)'}}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14.5 3 16 5 16 7c0 1.5-1 2-1 2s1.5 0 3 2c1.5 2 0 4-1 4z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-white text-xs font-medium mb-2">Calories Burn</h3>
              
              {/* Wave chart */}
              <div className="flex-1 flex items-end mb-2">
                <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                  <path d="M0,40 Q20,20 40,30 T80,25 T120,35 T160,20 T200,30 L200,48 L0,48 Z" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
              
              <div className="text-lg font-bold text-white">310 <span className="text-xs">kcal</span></div>
            </div>
            
            {/* Heart Rate Card - White */}
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-xl p-3 relative overflow-hidden flex flex-col" style={{boxShadow: '0px 0px 5px 0px rgba(12, 26, 75, 0.1)'}}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-gray-900 text-xs font-medium mb-2">Heart Rate</h3>
              
              {/* Wave chart */}
              <div className="flex-1 flex items-end mb-2">
                <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                  <path d="M0,35 Q20,15 40,25 T80,20 T120,30 T160,15 T200,25 L200,48 L0,48 Z" fill="rgba(156, 163, 175, 0.3)" />
                </svg>
              </div>
              
              <div className="text-lg font-bold text-gray-900">98 <span className="text-xs text-gray-500">bpm</span></div>
            </div>

            {/* Steps Card - White */}
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-xl p-3 relative overflow-hidden flex flex-col" style={{boxShadow: '0px 0px 5px 0px rgba(12, 26, 75, 0.1)'}}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-gray-900 text-xs font-medium mb-2">Steps</h3>
              
              {/* Wave chart */}
              <div className="flex-1 flex items-end mb-2">
                <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                  <path d="M0,40 Q20,20 40,30 T80,25 T120,35 T160,20 T200,30 L200,48 L0,48 Z" fill="rgba(156, 163, 175, 0.3)" />
                </svg>
              </div>
              
              <div className="text-lg font-bold text-gray-900">2,500 <span className="text-xs text-gray-500">steps</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningActivityScreen;

import React from 'react';

interface RunningDetailScreenProps {
  onBack: () => void;
  onContinue: () => void;
  onStartRunning?: () => void;
  onDailyReports?: () => void;
}

const RunningDetailScreen: React.FC<RunningDetailScreenProps> = ({ onBack, onContinue, onStartRunning, onDailyReports }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col w-full">
      {/* Status Bar - Hidden on web */}
      <div className="hidden sm:flex justify-between items-center px-6 pt-3 pb-2 text-sm text-gray-600">
        <span className="font-medium">09:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Header with Background Image */}
      <div 
        className="relative"
        style={{
          width: '375px',
          height: '280px',
          background: 'linear-gradient(0deg, rgba(42, 50, 64, 0.9), rgba(42, 50, 64, 0.9)), linear-gradient(0.27deg, #000000 0.28%, rgba(0, 0, 0, 0) 64.49%)',
          backgroundImage: 'url("/background_image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Navigation Header */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center space-x-3 mb-6">
            <button 
              onClick={onBack}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Profile Section with Right Icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h2 
                  className="text-white"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    verticalAlign: 'bottom',
                    width: '177px',
                    height: '24px',
                    opacity: 1
                  }}
                >
                  Hello, Thomas
                </h2>
              </div>
            </div>
            <div 
              className="flex items-center"
              style={{
                width: '72px',
                height: '24px',
                gap: '12px',
                opacity: 1
              }}
            >
              <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Stats Header Card */}
        <div className="px-6 pb-6">
          <div 
            className="flex justify-between items-center mx-auto"
            style={{
              width: '327px',
              height: '90px',
              borderRadius: '20px',
              padding: '20px',
              background: '#40464D99',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Weight */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 2l3 9" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm">Weight</p>
                <p className="text-white font-semibold text-lg">86.5 kg</p>
              </div>
            </div>

            {/* Steps */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm">Step</p>
                <p className="text-white font-semibold text-lg">1428 steps</p>
              </div>
            </div>

            {/* Heart Rate */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm">Heart Rate</p>
                <p className="text-white font-semibold text-lg">80 Bpm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div 
        className="flex flex-col items-start px-6 py-6"
        style={{
          width: '375px',
          background: '#FAFAFA',
          borderRadius: '32px 32px 0px 0px',
          marginTop: '-16px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Start your practice section */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Start your practice</h3>
          
          {/* Activity Cards */}
          <div className="flex space-x-4">
            {/* Running Card - Selected */}
            <div 
              className="flex flex-col items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={onStartRunning}
              style={{
                width: '92px',
                height: '85px',
                background: '#1B85F3',
                borderRadius: '16px',
                boxShadow: '0px 2px 6px rgba(27, 133, 243, 0.3), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)'
              }}
            >
              {/* Running Icon */}
              <div className="mb-2">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M3.36 2.3C3.36 2.3 8.33 9.2 8.33 9.2" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                  <path d="M8.33 35.42C8.33 35.42 14.58 22.92 14.58 22.92" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
                  <path d="M18.23 17.71L23.44 20.31" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M20.83 70.83L23.44 81.25" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M23.44 70.83L25 81.25" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M6.25 9.38C6.25 9.38 8.33 37.5 8.33 37.5" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M6.25 45.83C6.25 45.83 8.33 50 8.33 50" stroke="#FFFFFF" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Running</span>
            </div>

            {/* Cycling Card - Unselected */}
            <div 
              className="flex flex-col items-center justify-center"
              style={{
                width: '92px',
                height: '85px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0px 0px 8px rgba(12, 26, 75, 0.1), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)'
              }}
            >
              {/* Cycling Icon */}
              <div className="mb-2">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <circle cx="12.5" cy="12.5" r="10" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                  <path d="M12.5 2.5V7.5" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M12.5 17.5V22.5" stroke="#808B9A" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-gray-600 font-semibold text-sm">Cycling</span>
            </div>

            {/* Yoga Card - Unselected */}
            <div 
              className="flex flex-col items-center justify-center"
              style={{
                width: '92px',
                height: '85px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0px 0px 8px rgba(12, 26, 75, 0.1), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)'
              }}
            >
              {/* Yoga Icon */}
              <div className="mb-2">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.5 3.125C12.5 3.125 6.25 12.5 6.25 12.5" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M18.75 12.5C18.75 12.5 12.5 21.875 12.5 21.875" stroke="#808B9A" strokeWidth="1.5"/>
                  <path d="M12.5 3.125C12.5 3.125 18.75 12.5 18.75 12.5" stroke="#808B9A" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-gray-600 font-semibold text-sm">Yoga</span>
            </div>

            {/* Hiking Card - Unselected */}
            <div 
              className="flex flex-col items-center justify-center"
              style={{
                width: '92px',
                height: '85px',
                background: '#FFFFFF',
                borderRadius: '16px',
                boxShadow: '0px 0px 8px rgba(12, 26, 75, 0.1), 0px 4px 20px -2px rgba(50, 50, 71, 0.02)'
              }}
            >
              {/* Mountain Icon */}
              <div className="mb-2">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M3.125 16.67L12.5 3.125L21.875 16.67H3.125Z" stroke="#808B9A" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="text-gray-600 font-semibold text-sm">Hiking</span>
            </div>
          </div>
        </div>

        {/* Your habits section */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your habits</h3>
          
          {/* Habits Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Goals Card */}
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              style={{
                boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)'
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-1">Goals</h4>
              <p className="text-sm text-gray-600 text-center">73% achieved</p>
            </div>

            {/* Nutrition Card */}
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              style={{
                boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)'
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-1">Nutrition</h4>
              <p className="text-sm text-gray-600 text-center">3 hours of fasting</p>
            </div>

            {/* Challenges Card */}
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              style={{
                boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)'
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-1">Challenges</h4>
              <p className="text-sm text-gray-600 text-center">73% achieved</p>
            </div>

            {/* Daily Reports Card */}
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={onDailyReports}
              style={{
                boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)'
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-1">Daily Reports</h4>
              <p className="text-sm text-gray-600 text-center mb-3">All your details in a single place.</p>
              
              {/* Arrow Button */}
              <div className="flex justify-end">
                <button 
                  className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                  style={{
                    background: '#1B85F3'
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default RunningDetailScreen;
import React, { useState } from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import RunningActivityScreen from './RunningActivityScreen';

interface PersonalizedJourneyScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const PersonalizedJourneyScreen: React.FC<PersonalizedJourneyScreenProps> = ({
  onContinue,
  onBack
}) => {
  const { userProfile, loading, error, refetch } = useUserProfile();
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [showRunningScreen, setShowRunningScreen] = useState<boolean>(false);
  const [showMetricsView, setShowMetricsView] = useState<boolean>(false);

  const handleRunningClick = () => {
    setSelectedActivity('running');
    setShowRunningScreen(true);
  };

  const handleDailyReportsClick = () => {
    setShowRunningScreen(true);
  };

  const handleOtherActivityClick = (activity: string) => {
    setSelectedActivity(activity);
    setShowMetricsView(true);
  };

  const handleBackFromRunning = () => {
    setShowRunningScreen(false);
    setShowMetricsView(false);
  };

  if (showRunningScreen) {
    return <RunningActivityScreen onBack={handleBackFromRunning} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col w-full">
      {/* Conditional Header - Dark or Light */}
      {showMetricsView ? (
        /* Dark Header Section with Abstract Background */
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
              <path d="M0,100 Q100,50 200,100 T400,100 L400,0 L0,0 Z" fill="url(#gradient1)" />
              <path d="M0,150 Q150,100 300,150 T400,150 L400,200 L0,200 Z" fill="url(#gradient2)" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Status Bar */}
          <div className="relative z-10 flex justify-between items-center px-6 pt-3 pb-2 text-sm text-white">
            <span className="font-medium">09:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Header with Greeting */}
          <div className="relative z-10 flex items-center justify-between px-6 pb-6">
            {/* Left Side - Avatar and Greeting */}
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-3xl shadow-lg">
                {userProfile?.avatar || '👤'}
              </div>
              
              {/* Greeting Text */}
              <div>
                <p className="text-white text-lg">
                  {userProfile?.greeting || 'Hello'}
                </p>
                <h1 className="text-2xl font-bold text-white">
                  {userProfile?.name || 'Thomas'}
                </h1>
              </div>
            </div>

            {/* Right Side - Navigation Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Separator */}
              <div className="w-px h-6 bg-white/30"></div>
              
              {/* Menu Icon */}
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Key Metrics Card - Only in dark header */}
          <div className="relative z-10 px-6 pb-8">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="grid grid-cols-3 gap-4">
                {/* Weight */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="text-2xl">⚖️</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Weight</p>
                  <p className="text-lg font-bold">86.5 kg</p>
                </div>
                
                {/* Steps */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="text-2xl">👟</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Step</p>
                  <p className="text-lg font-bold">1428 steps</p>
                </div>
                
                {/* Heart Rate */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="text-2xl">❤️</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Heart Rate</p>
                  <p className="text-lg font-bold">80 Bpm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Light Header Section */
        <>
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

          {/* Header with Greeting */}
          <div className="flex items-center justify-between px-6 pb-6">
            {/* Left Side - Avatar and Greeting */}
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-3xl shadow-lg">
                {userProfile?.avatar || '👤'}
              </div>
              
              {/* Greeting Text */}
              <div>
                <p className="text-gray-500 text-lg">
                  {userProfile?.greeting || 'Hello'}
                </p>
                <h1 className="text-2xl font-bold text-gray-900">
                  {userProfile?.name || 'Thomas'}
                </h1>
              </div>
            </div>

            {/* Right Side - Navigation Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Separator */}
              <div className="w-px h-6 bg-gray-300"></div>
              
              {/* Menu Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Create Custom Workout Plan Banner */}
          <div className="px-6 pb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Create your Custom</h2>
                <h2 className="text-2xl font-bold mb-2">Workout Plan</h2>
                <p className="text-blue-100 text-lg">Training&Nutrition</p>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-32 flex items-center justify-center">
                <div className="text-6xl opacity-20">🧘‍♀️</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 px-6 pb-6">
        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading your personalized journey...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ErrorMessage 
                message={error} 
                onRetry={refetch}
              />
            </div>
          </div>
        )}

        {/* Main Content Sections */}
        {!loading && !error && (
          <div className="space-y-6">
            {/* What are you up to today? */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">What are you up to today?</h3>
              <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                <button 
                  onClick={() => setSelectedActivity('running')}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center space-y-1 border-2 ${
                    selectedActivity === 'running' 
                      ? 'bg-blue-100 border-blue-400' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="text-2xl">🏃‍♂️</div>
                  <span className={`text-xs font-medium ${
                    selectedActivity === 'running' ? 'text-blue-600' : 'text-gray-900'
                  }`}>Running</span>
                </button>
                <button 
                  onClick={() => handleOtherActivityClick('cycling')}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center space-y-1 border-2 ${
                    selectedActivity === 'cycling' 
                      ? 'bg-blue-100 border-blue-400' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="text-2xl">🚴‍♀️</div>
                  <span className={`text-xs font-medium ${
                    selectedActivity === 'cycling' ? 'text-blue-600' : 'text-gray-900'
                  }`}>Cycling</span>
                </button>
                <button 
                  onClick={() => handleOtherActivityClick('yoga')}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center space-y-1 border-2 ${
                    selectedActivity === 'yoga' 
                      ? 'bg-blue-100 border-blue-400' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="text-2xl">🧘‍♀️</div>
                  <span className={`text-xs font-medium ${
                    selectedActivity === 'yoga' ? 'text-blue-600' : 'text-gray-900'
                  }`}>Yoga</span>
                </button>
              </div>
            </div>

            {/* Your habits */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your habits</h3>
              {showMetricsView ? (
                /* 2x2 Grid - 4 cards (Metrics View) */
                <div className="grid grid-cols-2 gap-4">
                  {/* Goals Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="text-2xl">🎯</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Goals</h4>
                        <p className="text-sm text-gray-500">73% achieved</p>
                      </div>
                    </div>
                  </div>

                  {/* Nutrition Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="text-2xl">🥑</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Nutrition</h4>
                        <p className="text-sm text-gray-500">3 hours of fasting</p>
                      </div>
                    </div>
                  </div>

                  {/* Challenges Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="text-2xl">🏔️</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Challenges</h4>
                        <p className="text-sm text-gray-500">73% achieved</p>
                      </div>
                    </div>
                  </div>

                  {/* Daily Reports Card */}
                  <div 
                    className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={handleDailyReportsClick}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <div className="text-2xl">📊</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Daily Reports</h4>
                          <p className="text-sm text-gray-500">All your details in a single place.</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* 2x1 + 1x1 Layout - 3 cards (Initial State) */
                <div className="space-y-4">
                  {/* Top Row - Goals and Nutrition */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Goals Card */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <div className="text-2xl">🎯</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Goals</h4>
                          <p className="text-sm text-gray-500">73% achieved</p>
                        </div>
                      </div>
                    </div>

                    {/* Nutrition Card */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="text-2xl">🥑</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Nutrition</h4>
                          <p className="text-sm text-gray-500">3 hours of fasting</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row - Daily Reports (full width) */}
                  <div 
                    className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={handleDailyReportsClick}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <div className="text-2xl">📊</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Daily Reports</h4>
                          <p className="text-sm text-gray-500">All your details in a single place.</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default PersonalizedJourneyScreen;

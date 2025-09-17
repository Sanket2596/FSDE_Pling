import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface PersonalizedJourneyScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

const PersonalizedJourneyScreen: React.FC<PersonalizedJourneyScreenProps> = ({
  onContinue,
  onBack
}) => {
  const { userProfile, loading, error, refetch } = useUserProfile();

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

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-hide">
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

        {/* Personalized Greeting */}
        {!loading && !error && userProfile && (
          <>
            {/* Header with Greeting */}
            <div className="flex items-center justify-between mb-8">
              {/* Left Side - Avatar and Greeting */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-3xl shadow-lg">
                  {userProfile.avatar}
                </div>
                
                {/* Greeting Text */}
                <div>
                  <p className="text-gray-500 text-lg">
                    {userProfile.greeting}
                  </p>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {userProfile.name}
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

            {/* Main Content Sections */}
            <div className="space-y-6">
              {/* Create Custom Workout Plan Banner */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2">Create your Custom Workout Plan</h2>
                  <p className="text-blue-100 text-lg">Training&Nutrition</p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-32 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🧘‍♀️</div>
                </div>
              </div>

              {/* What are you up to today? */}
              <div>
                <h3 className="text-lg text-gray-500 mb-4">What are you up to today?</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-100 rounded-xl flex flex-col items-center justify-center space-y-1">
                    <div className="text-2xl">🏃‍♂️</div>
                    <span className="text-xs font-medium text-gray-900">Running</span>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-xl flex flex-col items-center justify-center space-y-1">
                    <div className="text-2xl">🚴‍♀️</div>
                    <span className="text-xs font-medium text-gray-900">Cycling</span>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-100 rounded-xl flex flex-col items-center justify-center space-y-1">
                    <div className="text-2xl">🧘‍♀️</div>
                    <span className="text-xs font-medium text-gray-900">Yoga</span>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-xl flex flex-col items-center justify-center space-y-1">
                    <div className="text-2xl">🏋️‍♂️</div>
                    <span className="text-xs font-medium text-gray-900">Gym</span>
                  </div>
                </div>
              </div>

              {/* Your habits */}
              <div>
                <h3 className="text-lg text-gray-500 mb-4">Your habits</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                  {/* Goals Card */}
                  <div className="flex-shrink-0 w-32 h-20 bg-pink-100 rounded-xl flex items-center space-x-3 p-3">
                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                      <div className="text-lg">🎯</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Goals</h4>
                      <p className="text-xs text-gray-500">73% achieved</p>
                    </div>
                  </div>

                  {/* Nutrition Card */}
                  <div className="flex-shrink-0 w-32 h-20 bg-green-100 rounded-xl flex items-center space-x-3 p-3">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <div className="text-lg">🥑</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Nutrition</h4>
                      <p className="text-xs text-gray-500">3 hours of fasting</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Reports */}
              <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Daily Reports</h3>
                  <p className="text-sm text-gray-500">All your details in a single place.</p>
                </div>
                <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={onContinue}
          className="w-full bg-accent-blue hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-button transition-colors duration-200"
        >
          Start Your Journey
        </button>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default PersonalizedJourneyScreen;

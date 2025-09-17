import React from 'react';
import { Sport } from '../services/sportsApi';

interface SelectedSportsScreenProps {
  selectedSports: string[];
  allSports: Sport[];
  onBack: () => void;
  onContinue: () => void;
  onEdit: () => void;
  currentStep: number;
  totalSteps: number;
}

const SelectedSportsScreen: React.FC<SelectedSportsScreenProps> = ({
  selectedSports,
  allSports,
  onBack,
  onContinue,
  onEdit,
  currentStep,
  totalSteps
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  // Get the full sport objects for selected sports
  const selectedSportObjects = allSports.filter(sport => 
    selectedSports.includes(sport.id)
  );

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

      {/* Header */}
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <h1 className="text-lg font-semibold text-gray-900">Step {currentStep}</h1>
          </div>
          <button 
            onClick={onEdit}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Edit selection
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mb-8">
          <div 
            className="bg-accent-orange h-1 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 flex-1 flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight text-gray-900">
          Great choices!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          You've selected {selectedSports.length} sport{selectedSports.length !== 1 ? 's' : ''} that you enjoy.
        </p>

        {/* Selected Sports List */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4 pb-4">
            {selectedSportObjects.map((sport) => (
              <SelectedSportCard
                key={sport.id}
                sport={sport}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {selectedSports.length}
              </div>
              <div className="text-sm text-gray-600">
                Sport{selectedSports.length !== 1 ? 's' : ''} Selected
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {selectedSportObjects.reduce((total, sport) => total + sport.practices, 0)}
              </div>
              <div className="text-sm text-gray-600">
                Total Practices
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-6 pb-8 pt-4 space-y-3">
        <button
          onClick={onContinue}
          className="w-full bg-accent-blue hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-button transition-colors duration-200"
        >
          Continue to Next Step
        </button>
        <button
          onClick={onEdit}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-button transition-colors duration-200"
        >
          Change Selection
        </button>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

interface SelectedSportCardProps {
  sport: Sport;
}

const SelectedSportCard: React.FC<SelectedSportCardProps> = ({ sport }) => {
  return (
    <div className="bg-yellow-100 rounded-xl p-4 border-2 border-yellow-400 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="w-6 h-6 rounded-full border-2 border-accent-blue bg-accent-blue flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
              {sport.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {sport.practices} available practices
            </p>
            {sport.category && (
              <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-accent-blue text-white rounded-full">
                {sport.category}
              </span>
            )}
          </div>
        </div>
        <div className="text-4xl sm:text-5xl opacity-80 flex-shrink-0 ml-4">
          {sport.image}
        </div>
      </div>
    </div>
  );
};

export default SelectedSportsScreen;

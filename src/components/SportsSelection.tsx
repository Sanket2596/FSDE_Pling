import React, { useState } from 'react';
import { useSports } from '../hooks/useSports';
import { Sport } from '../services/sportsApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface SportsSelectionProps {
  onContinue: (selectedSports: string[]) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedSports: string[];
}

const SportsSelection: React.FC<SportsSelectionProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedSports: initialSelectedSports
}) => {
  const [selectedSports, setSelectedSports] = useState<string[]>(initialSelectedSports);
  const { sports, loading, error, refetch } = useSports();

  const handleSportToggle = (sportId: string) => {
    setSelectedSports(prev => 
      prev.includes(sportId) 
        ? prev.filter(id => id !== sportId)
        : [...prev, sportId]
    );
  };

  const handleContinue = () => {
    onContinue(selectedSports);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

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
            onClick={onSkip}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Skip question
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
          First up, which sports do you enjoy the most?
        </h2>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Select all that applies:
          </p>
          {selectedSports.length > 0 && (
            <span className="px-3 py-1 bg-accent-blue text-white text-sm font-medium rounded-full">
              {selectedSports.length} selected
            </span>
          )}
        </div>


        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading sports...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-6">
            <ErrorMessage 
              message={error} 
              onRetry={refetch}
            />
          </div>
        )}

        {/* Sports Cards - Scrollable */}
        {!loading && !error && (
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 pb-4">
              {sports.map((sport) => (
                <SportCard
                  key={sport.id}
                  sport={sport}
                  isSelected={selectedSports.includes(sport.id)}
                  onToggle={() => handleSportToggle(sport.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="px-4 sm:px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={selectedSports.length === 0}
          className="w-full bg-accent-blue hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-button transition-colors duration-200"
        >
          Continue
        </button>
      </div>

      {/* Home Indicator - Hidden on web */}
      <div className="hidden sm:flex justify-center pb-2">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

interface SportCardProps {
  sport: Sport;
  isSelected: boolean;
  onToggle: () => void;
}

const SportCard: React.FC<SportCardProps> = ({ sport, isSelected, onToggle }) => {
  return (
    <div 
      className={`w-full rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
        isSelected 
          ? 'bg-yellow-100 border-yellow-400' 
          : 'bg-white border-gray-200'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            isSelected 
              ? 'border-accent-blue bg-accent-blue' 
              : 'border-gray-300'
          }`}>
            {isSelected && (
              <div className="w-2 h-2 bg-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg">
              {sport.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {sport.practices} available practices
            </p>
          </div>
        </div>
        <div className="text-4xl opacity-80 flex-shrink-0 ml-4">
          {sport.image}
        </div>
      </div>
    </div>
  );
};

export default SportsSelection;

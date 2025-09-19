import React, { useState } from 'react';
import { useSports } from '../hooks/useSports';
import { Sport } from '../services/sportsApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import SportCard from './SportCard';

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
    <div 
      className="min-h-screen text-gray-900 flex flex-col w-full max-w-sm mx-auto relative"
      style={{
        background: '#FAFAFA',
        boxShadow: '0px 4px 20px rgba(114, 114, 114, 0.1)',
        borderRadius: '26px'
      }}
    >
      {/* Content */}
      <div className="flex flex-col items-center px-6 py-4 gap-6 flex-1">
        {/* Status Bar - Hidden on web */}
        <div className="hidden sm:flex justify-between items-center w-full text-sm text-gray-600">
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
        <div className="w-full">
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
              className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex-1 flex flex-col">
          <div className="text-center mb-8">
            <h2 
              className="font-bold mb-2 leading-tight text-center"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '34px',
                color: '#39434F'
              }}
            >
              First up, which sports do you enjoy the most?
            </h2>
            <p 
              className="text-center"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#808B9A'
              }}
            >
              Select all that applies:
            </p>
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
      </div>

      {/* Continue Button */}
      <div 
        className="px-6 pb-8 pt-4"
        style={{
          backdropFilter: 'blur(5px)',
          boxShadow: '0px -5px 40px rgba(73, 77, 90, 0.12)',
          background: 'rgba(255, 255, 255, 0.97)',
          borderRadius: '26px'
        }}
      >
        <button
          onClick={handleContinue}
          disabled={selectedSports.length === 0}
          className="w-full py-4 px-6 rounded-button transition-colors duration-200"
          style={{
            background: selectedSports.length === 0 ? '#D1E6FF' : '#1B85F3',
            color: '#FFFFFF',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '20px',
            borderRadius: '14px',
            border: 'none',
            cursor: selectedSports.length === 0 ? 'not-allowed' : 'pointer',
            opacity: selectedSports.length === 0 ? 0.5 : 1,
            width: '327px',
            height: '54px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '17px',
            gap: '6px'
          }}
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


export default SportsSelection;

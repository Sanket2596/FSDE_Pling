import React, { useState, useEffect } from 'react';
import { useTrainingLocations } from '../hooks/useTrainingLocations';
import { TrainingLocation } from '../services/locationApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface TrainingLocationScreenProps {
  onContinue: (selectedLocations: string[]) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedLocations: string[];
}

const TrainingLocationScreen: React.FC<TrainingLocationScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedLocations: initialSelectedLocations
}) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>(initialSelectedLocations);
  const { locations, loading, error, refetch } = useTrainingLocations();

  // Sync state with prop changes
  useEffect(() => {
    setSelectedLocations(initialSelectedLocations);
  }, [initialSelectedLocations]);

  const handleLocationToggle = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId) 
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };

  const handleContinue = () => {
    onContinue(selectedLocations);
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
      <div className="px-6 py-4">
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
        <div className="w-full bg-gray-200 rounded-full h-1 mb-8 overflow-hidden">
          <div 
            className="bg-accent-orange h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 flex-1 flex flex-col">
        {/* Content Container */}
        <div 
          className="flex flex-col items-start mx-auto"
          style={{
            width: '327px',
            height: '312px',
            gap: '24px',
            padding: '0px'
          }}
        >
          {/* Title and Body */}
          <div 
            className="flex flex-col items-center"
            style={{
              width: '327px',
              height: '64px',
              gap: '10px',
              padding: '0px'
            }}
          >
            {/* Title */}
            <h2 
              className="flex items-end"
              style={{
                width: '327px',
                height: '34px',
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '34px',
                color: '#39434F',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              Where do you enjoy the most to train?
            </h2>
            
            {/* Body */}
            <p 
              className="flex items-end"
              style={{
                width: '327px',
                height: '20px',
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#808B9A',
                display: 'flex',
                alignItems: 'flex-end'
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
                <p className="text-gray-600">Loading locations...</p>
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

          {/* Options */}
          {!loading && !error && (
            <div 
              className="flex flex-col items-start"
              style={{
                width: '327px',
                height: '224px',
                gap: '16px',
                padding: '0px'
              }}
            >
              {/* Location Options - Horizontal Tags Layout */}
              <div className="w-full">
                {/* First row */}
                <div 
                  className="flex items-start mb-4"
                  style={{
                    width: '327px',
                    height: '44px',
                    gap: '12px'
                  }}
                >
                  {locations.slice(0, 3).map((location) => (
                    <TrainingLocationCard
                      key={location.id}
                      location={location}
                      isSelected={selectedLocations.includes(location.id)}
                      onToggle={() => handleLocationToggle(location.id)}
                    />
                  ))}
                </div>
                
                {/* Second row */}
                <div 
                  className="flex items-start"
                  style={{
                    width: '327px',
                    height: '44px',
                    gap: '12px'
                  }}
                >
                  {locations.slice(3, 5).map((location) => (
                    <TrainingLocationCard
                      key={location.id}
                      location={location}
                      isSelected={selectedLocations.includes(location.id)}
                      onToggle={() => handleLocationToggle(location.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={selectedLocations.length === 0}
          className="w-full bg-accent-blue hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-button transition-colors duration-200"
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

interface TrainingLocationCardProps {
  location: TrainingLocation;
  isSelected: boolean;
  onToggle: () => void;
}

const TrainingLocationCard: React.FC<TrainingLocationCardProps> = ({ 
  location, 
  isSelected, 
  onToggle 
}) => {
  // Determine card width based on location name (matching specs)
  const getCardWidth = (name: string) => {
    if (name === 'Outdoor') return '118px';
    if (name === 'Indoor') return '92.5px';
    if (name === 'Home') return '92.5px';
    if (name === 'At the gym') return '130px';
    if (name === 'In the park') return '128px';
    return '92.5px';
  };

  const getTextWidth = (name: string) => {
    if (name === 'Outdoor') return '60px';
    if (name === 'Indoor') return '45px';
    if (name === 'Home') return '41px';
    if (name === 'At the gym') return '72px';
    if (name === 'In the park') return '70px';
    return '45px';
  };

  return (
    <div 
      className="cursor-pointer transition-all duration-200 hover:scale-[1.02]"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 18px',
        gap: '4px',
        width: getCardWidth(location.name),
        height: '44px',
        background: isSelected ? '#F5BA41' : '#FFFFFF',
        border: isSelected ? '1px solid #E6B13B' : '1px solid #D9DFE6',
        borderRadius: '14px'
      }}
      onClick={onToggle}
    >
      {/* Icon */}
      <div 
        style={{
          width: '18px',
          height: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span 
          style={{
            fontSize: '16px',
            color: isSelected ? '#FFFFFF' : '#808B9A'
          }}
        >
          {location.icon}
        </span>
      </div>

      {/* Text */}
      <div 
        style={{
          width: getTextWidth(location.name),
          height: '20px',
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: isSelected ? 700 : 500,
          fontSize: '14px',
          lineHeight: '20px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: isSelected ? '#FFFFFF' : '#808B9A'
        }}
      >
        {location.name}
      </div>
    </div>
  );
};

export default TrainingLocationScreen;
import React, { useState } from 'react';
import { useTrainingFrequency } from '../hooks/useTrainingFrequency';
import { TrainingFrequency } from '../services/frequencyApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface TrainingFrequencyScreenProps {
  onContinue: (selectedFrequency: string) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedFrequency: string;
}

const TrainingFrequencyScreen: React.FC<TrainingFrequencyScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedFrequency: initialSelectedFrequency
}) => {
  const [selectedFrequency, setSelectedFrequency] = useState<string>(initialSelectedFrequency);
  const { frequencies, loading, error, refetch } = useTrainingFrequency();

  const handleFrequencySelect = (frequencyId: string) => {
    setSelectedFrequency(frequencyId);
  };

  const handleContinue = () => {
    onContinue(selectedFrequency);
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
              How often do you train?
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
              Select what fits best:
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <LoadingSpinner size="lg" className="mb-4" />
                <p className="text-gray-600">Loading frequencies...</p>
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
              {frequencies.map((frequency) => (
                <FrequencyCard
                  key={frequency.id}
                  frequency={frequency}
                  isSelected={selectedFrequency === frequency.id}
                  onSelect={() => handleFrequencySelect(frequency.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={!selectedFrequency}
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

interface FrequencyCardProps {
  frequency: TrainingFrequency;
  isSelected: boolean;
  onSelect: () => void;
}

const FrequencyCard: React.FC<FrequencyCardProps> = ({ 
  frequency, 
  isSelected, 
  onSelect 
}) => {
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
        width: '327px',
        height: '44px',
        background: '#FFFFFF',
        border: '1px solid #D9DFE6',
        borderRadius: '14px'
      }}
      onClick={onSelect}
    >
      {/* Text */}
      <div 
        className="flex items-center"
        style={{
          width: 'auto',
          height: '20px',
          fontFamily: 'Plus Jakarta Sans',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#808B9A'
        }}
      >
        {frequency.name}
      </div>
      
      {/* Radio Button */}
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-auto ${
        isSelected 
          ? 'border-accent-blue bg-accent-blue' 
          : 'border-gray-300'
      }`}>
        {isSelected && (
          <div className="w-2 h-2 bg-white rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default TrainingFrequencyScreen;

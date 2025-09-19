import React, { useState } from 'react';
import { useDietTypes } from '../hooks/useDietTypes';
import { DietType } from '../services/dietApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface DietTypeScreenProps {
  onContinue: (selectedDietType: string) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedDietType: string;
}

const DietTypeScreen: React.FC<DietTypeScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedDietType: initialSelectedDietType
}) => {
  const [selectedDietType, setSelectedDietType] = useState<string>(initialSelectedDietType);
  const { dietTypes, loading, error, refetch } = useDietTypes();

  const handleDietTypeSelect = (dietTypeId: string) => {
    setSelectedDietType(dietTypeId);
  };

  const handleContinue = () => {
    onContinue(selectedDietType);
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
              What's your diet type?
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
                <p className="text-gray-600">Loading diet types...</p>
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
              {dietTypes.map((dietType) => (
                <DietTypeCard
                  key={dietType.id}
                  dietType={dietType}
                  isSelected={selectedDietType === dietType.id}
                  onSelect={() => handleDietTypeSelect(dietType.id)}
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
          disabled={!selectedDietType}
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

interface DietTypeCardProps {
  dietType: DietType;
  isSelected: boolean;
  onSelect: () => void;
}

const DietTypeCard: React.FC<DietTypeCardProps> = ({ 
  dietType, 
  isSelected, 
  onSelect 
}) => {
  return (
    <div 
      className="cursor-pointer transition-all duration-200 hover:scale-[1.02]"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '16px 20px',
        gap: '7.5px',
        width: '327px',
        height: '76px',
        background: isSelected ? '#F5BA41' : '#FFFFFF',
        border: isSelected ? '2px solid #E6B13B' : '1px solid #F7FAFC',
        boxShadow: '0px 0px 3.75px rgba(12, 26, 75, 0.05), 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02)',
        borderRadius: '14px'
      }}
      onClick={onSelect}
    >
      {/* Text */}
      <div 
        className="flex flex-row items-center"
        style={{
          padding: '0px',
          gap: '6px',
          width: '287px',
          height: '44px'
        }}
      >
        {/* Frame 280039 */}
        <div 
          className="flex flex-col items-start"
          style={{
            padding: '0px',
            gap: '6px',
            width: '261px',
            height: '44px'
          }}
        >
          {/* Title */}
          <div 
            className="flex items-end"
            style={{
              width: 'auto',
              height: '20px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: isSelected ? 700 : 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: isSelected ? '#FFFFFF' : '#39434F'
            }}
          >
            {dietType.name}
          </div>
          
          {/* Body */}
          <div 
            className="flex items-end"
            style={{
              width: 'auto',
              height: '18px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              fontSize: '13px',
              lineHeight: '18px',
              color: isSelected ? '#FFFFFF' : '#808B9A',
              opacity: isSelected ? 0.8 : 1
            }}
          >
            {dietType.description}
          </div>
        </div>
      </div>
      
      {/* Check Icon */}
      <div 
        style={{
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {isSelected ? (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            {/* White circle background */}
            <circle 
              cx="10" 
              cy="10" 
              r="8" 
              fill="#FFFFFF" 
              stroke="#FFFFFF" 
              strokeWidth="1.5"
            />
            {/* Checkmark */}
            <path 
              d="M6 10L8.5 12.5L14 7" 
              stroke="#F5BA41" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <div 
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid #D9DFE6',
              borderRadius: '50%'
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DietTypeScreen;

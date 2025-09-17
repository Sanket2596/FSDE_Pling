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
            className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 leading-tight text-gray-900 text-center">
          What's your diet type?
        </h2>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Select what fits best:
        </p>

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

        {/* Diet Type Options */}
        {!loading && !error && (
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4 pb-4">
              {dietTypes.map((dietType) => (
                <DietTypeCard
                  key={dietType.id}
                  dietType={dietType}
                  isSelected={selectedDietType === dietType.id}
                  onSelect={() => handleDietTypeSelect(dietType.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={!selectedDietType}
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
      className={`w-full rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
        isSelected 
          ? 'bg-yellow-100 border-yellow-400' 
          : 'bg-white border-gray-200'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className={`font-semibold text-lg mb-1 ${
            isSelected ? 'text-gray-900' : 'text-gray-900'
          }`}>
            {dietType.name}
          </h3>
          <p className={`text-sm ${
            isSelected ? 'text-gray-700' : 'text-gray-600'
          }`}>
            {dietType.description}
          </p>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 ${
          isSelected 
            ? 'border-yellow-500 bg-yellow-500' 
            : 'border-gray-300'
        }`}>
          {isSelected && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default DietTypeScreen;

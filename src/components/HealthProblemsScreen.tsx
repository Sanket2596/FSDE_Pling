import React, { useState } from 'react';
import { useHealthProblems } from '../hooks/useHealthProblems';
import { HealthProblem } from '../services/healthApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface HealthProblemsScreenProps {
  onContinue: (selectedHealthProblem: string) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedHealthProblem: string;
}

const HealthProblemsScreen: React.FC<HealthProblemsScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedHealthProblem: initialSelectedHealthProblem
}) => {
  const [selectedHealthProblem, setSelectedHealthProblem] = useState<string>('');
  const [healthDetails, setHealthDetails] = useState<string>('');
  const { healthProblems, loading, error, refetch } = useHealthProblems();

  const handleHealthProblemSelect = (healthProblemId: string) => {
    // If clicking the same option, deselect it
    if (selectedHealthProblem === healthProblemId) {
      setSelectedHealthProblem('');
      setHealthDetails('');
    } else {
      setSelectedHealthProblem(healthProblemId);
      // Clear health details when switching to "No" option
      if (healthProblemId === 'no-problems') {
        setHealthDetails('');
      }
    }
  };

  const handleHealthDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHealthDetails(e.target.value);
  };

  const handleContinue = () => {
    onContinue(selectedHealthProblem);
  };

  // Continue is enabled when any option is selected (No or Yes)
  // If "Yes" is selected, health details are optional
  const isContinueDisabled = !selectedHealthProblem;

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
          Do you have any health problems that can affect your trainings?
        </h2>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Select what fits best:
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading options...</p>
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

        {/* Health Problem Options */}
        {!loading && !error && (
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col items-center space-y-4 pb-4">
              {healthProblems.map((healthProblem) => (
                <HealthProblemCard
                  key={healthProblem.id}
                  healthProblem={healthProblem}
                  isSelected={selectedHealthProblem === healthProblem.id}
                  onSelect={() => handleHealthProblemSelect(healthProblem.id)}
                />
              ))}
              
              {/* Health Details Text Area - Only show when "Yes, I have" is selected */}
              {selectedHealthProblem === 'has-problems' && (
                <div className="mt-4 w-full max-w-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                    Tell us more about your condition
                  </label>
                  <div className="relative">
                    <textarea
                      value={healthDetails}
                      onChange={handleHealthDetailsChange}
                      placeholder="Type here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      rows={4}
                      maxLength={250}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                      {healthDetails.length}/250
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-8 pt-4">
        <button
          onClick={handleContinue}
          disabled={isContinueDisabled}
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

interface HealthProblemCardProps {
  healthProblem: HealthProblem;
  isSelected: boolean;
  onSelect: () => void;
}

const HealthProblemCard: React.FC<HealthProblemCardProps> = ({ 
  healthProblem, 
  isSelected, 
  onSelect 
}) => {
  return (
    <div 
      className="cursor-pointer transition-all duration-200 hover:scale-[1.02] border"
      style={{
        width: '327px',
        height: '44px',
        borderRadius: '14px',
        paddingTop: '12px',
        paddingRight: '18px',
        paddingBottom: '12px',
        paddingLeft: '18px',
        borderWidth: '1px',
        background: isSelected ? '#F5BA41' : '#FFFFFF',
        borderColor: isSelected ? '#E6B13B' : '#E5E7EB'
      }}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center" style={{ gap: '4px' }}>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {healthProblem.name}
            </h3>
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected 
            ? 'border-orange-500 bg-orange-500' 
            : 'border-gray-300'
        }`}>
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthProblemsScreen;

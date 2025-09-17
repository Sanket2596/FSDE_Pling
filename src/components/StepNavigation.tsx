import React from 'react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onSkip?: () => void;
  showSkip?: boolean;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onSkip,
  showSkip = true
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <button 
            onClick={onBack}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-px h-6 bg-white/30"></div>
          <h1 className="text-lg font-semibold">Step {currentStep}</h1>
        </div>
        {showSkip && onSkip && (
          <button 
            onClick={onSkip}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Skip question
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-1">
        <div 
          className="bg-accent-orange h-1 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StepNavigation;

import React, { useState } from 'react';
import { useWorkoutActivities } from '../hooks/useWorkoutActivities';
import { WorkoutActivity } from '../services/workoutApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface WorkoutActivityScreenProps {
  onContinue: (selectedActivities: string[]) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedActivities: string[];
}

const WorkoutActivityScreen: React.FC<WorkoutActivityScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedActivities: initialSelectedActivities
}) => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>(initialSelectedActivities);
  const { activities, loading, error, refetch } = useWorkoutActivities();

  const handleActivityToggle = (activityId: string) => {
    setSelectedActivities(prev => 
      prev.includes(activityId) 
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const handleContinue = () => {
    onContinue(selectedActivities);
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
        <div className="w-full bg-gray-200 rounded-full h-1 mb-8">
          <div 
            className="bg-accent-orange h-1 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 leading-tight text-gray-900">
          Which sport activity gives the best workout?
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          Select all that applies:
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading activities...</p>
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

        {/* Activity Options */}
        {!loading && !error && (
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-4 pb-4">
              {activities.map((activity) => (
                <WorkoutActivityCard
                  key={activity.id}
                  activity={activity}
                  isSelected={selectedActivities.includes(activity.id)}
                  onToggle={() => handleActivityToggle(activity.id)}
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
          disabled={selectedActivities.length === 0}
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

interface WorkoutActivityCardProps {
  activity: WorkoutActivity;
  isSelected: boolean;
  onToggle: () => void;
}

const WorkoutActivityCard: React.FC<WorkoutActivityCardProps> = ({ 
  activity, 
  isSelected, 
  onToggle 
}) => {
  return (
    <div 
      className={`w-full rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
        isSelected 
          ? 'bg-orange-100 border-orange-400' 
          : 'bg-white border-gray-200'
      }`}
      onClick={onToggle}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-4xl">
          {activity.icon}
        </div>
        <div>
          <h3 className={`font-semibold text-sm ${
            isSelected ? 'text-orange-800' : 'text-gray-900'
          }`}>
            {activity.name}
          </h3>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isSelected 
            ? 'border-orange-600 bg-orange-600' 
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

export default WorkoutActivityScreen;

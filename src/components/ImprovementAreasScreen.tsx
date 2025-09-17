import React, { useState } from 'react';
import { useImprovementAreas } from '../hooks/useImprovementAreas';
import { ImprovementArea } from '../services/improvementApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface ImprovementAreasScreenProps {
  onContinue: (selectedAreas: string[]) => void;
  onSkip: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  selectedAreas: string[];
}

const ImprovementAreasScreen: React.FC<ImprovementAreasScreenProps> = ({
  onContinue,
  onSkip,
  onBack,
  currentStep,
  totalSteps,
  selectedAreas: initialSelectedAreas
}) => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>(initialSelectedAreas);
  const { improvementAreas, loading, error, refetch } = useImprovementAreas();

  const handleAreaToggle = (areaId: string) => {
    setSelectedAreas(prev => 
      prev.includes(areaId) 
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  const handleContinue = () => {
    onContinue(selectedAreas);
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
          What do you want to improve?
        </h2>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Select all that applies:
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-gray-600">Loading improvement areas...</p>
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

        {/* Improvement Areas - Horizontal Scrollable Cards */}
        {!loading && !error && (
          <div className="flex-1 overflow-hidden">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {improvementAreas.map((area) => (
                <ImprovementAreaCard
                  key={area.id}
                  area={area}
                  isSelected={selectedAreas.includes(area.id)}
                  onToggle={() => handleAreaToggle(area.id)}
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
          disabled={selectedAreas.length === 0}
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

interface ImprovementAreaCardProps {
  area: ImprovementArea;
  isSelected: boolean;
  onToggle: () => void;
}

const ImprovementAreaCard: React.FC<ImprovementAreaCardProps> = ({ 
  area, 
  isSelected, 
  onToggle 
}) => {
  return (
    <div 
      className={`flex-shrink-0 w-80 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 ${
        isSelected 
          ? 'bg-blue-50 border-accent-blue' 
          : 'bg-white border-gray-200'
      }`}
      onClick={onToggle}
    >
      <div className="flex flex-col h-full">
        {/* Selection Indicator */}
        <div className="flex justify-end mb-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isSelected 
              ? 'bg-accent-blue' 
              : 'bg-gray-100'
          }`}>
            {isSelected && (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>

        {/* Image/Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-orange-200 flex items-center justify-center text-6xl">
            {area.image}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className={`font-bold text-xl mb-3 text-center ${
            isSelected ? 'text-gray-900' : 'text-gray-900'
          }`}>
            {area.title}
          </h3>
          <p className={`text-sm leading-relaxed text-center flex-1 ${
            isSelected ? 'text-gray-700' : 'text-gray-600'
          }`}>
            {area.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImprovementAreasScreen;

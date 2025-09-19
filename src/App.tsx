import React, { useState } from 'react';
import ResponsiveLayout from './components/ResponsiveLayout';
import SportsSelection from './components/SportsSelection';
import SelectedSportsScreen from './components/SelectedSportsScreen';
import WorkoutActivityScreen from './components/WorkoutActivityScreen';
import TrainingLocationScreen from './components/TrainingLocationScreen';
import TrainingFrequencyScreen from './components/TrainingFrequencyScreen';
import HealthProblemsScreen from './components/HealthProblemsScreen';
import DietTypeScreen from './components/DietTypeScreen';
import ImprovementAreasScreen from './components/ImprovementAreasScreen';
import PersonalizedJourneyScreen from './components/PersonalizedJourneyScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { useSports } from './hooks/useSports';

interface AppState {
  currentStep: number;
  selectedSports: string[];
  selectedActivities: string[];
  selectedLocations: string[];
  selectedFrequency: string;
  selectedHealthProblem: string;
  selectedDietType: string;
  selectedImprovementAreas: string[];
  completedSteps: string[];
  showSelectedScreen: boolean;
  currentScreen: 'sports' | 'selected' | 'workout' | 'location' | 'frequency' | 'health' | 'diet' | 'improvement' | 'journey';
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentStep: 2,
    selectedSports: [],
    selectedActivities: ['strength-training'], // Pre-select "Strenght training" to match image
    selectedLocations: ['outdoor'], // Pre-select "Outdoor" to match image
    selectedFrequency: '', // No pre-selection
    selectedHealthProblem: '', // No pre-selection
    selectedDietType: '', // No pre-selection
    selectedImprovementAreas: [], // No pre-selection
    completedSteps: [],
    showSelectedScreen: false,
    currentScreen: 'sports'
  });

  const { sports } = useSports();
  const totalSteps = 9; // 9 total steps in the flow

  const handleSportSelection = (selectedSports: string[]) => {
    setAppState((prev: AppState) => ({
      ...prev,
      selectedSports,
      completedSteps: [...prev.completedSteps, 'sports'],
      showSelectedScreen: true,
      currentScreen: 'selected'
    }));
  };

  const handleContinueFromSelected = () => {
    // Move to Screen 3 (Workout Activity)
    setAppState((prev: AppState) => ({
      ...prev,
      currentStep: 3,
      showSelectedScreen: false,
      currentScreen: 'workout'
    }));
  };

  const handleEditSelection = () => {
    // Go back to sports selection
    setAppState((prev: AppState) => ({
      ...prev,
      showSelectedScreen: false,
      currentScreen: 'sports'
    }));
  };

  const handleWorkoutActivitySelection = (selectedActivities: string[]) => {
    // Move to Screen 4 (Training Location)
    setAppState((prev: AppState) => ({
      ...prev,
      selectedActivities,
      completedSteps: [...prev.completedSteps, 'workout'],
      currentStep: 4,
      currentScreen: 'location'
    }));
  };

  const handleLocationSelection = (selectedLocations: string[]) => {
    // Move to Screen 5 (Training Frequency)
    setAppState((prev: AppState) => ({
      ...prev,
      selectedLocations,
      completedSteps: [...prev.completedSteps, 'location'],
      currentStep: 5,
      currentScreen: 'frequency'
    }));
  };

  const handleFrequencySelection = (selectedFrequency: string) => {
    // Move to Screen 6 (Health Problems)
    setAppState((prev: AppState) => ({
      ...prev,
      selectedFrequency,
      completedSteps: [...prev.completedSteps, 'frequency'],
      currentStep: 6,
      currentScreen: 'health'
    }));
  };

  const handleHealthProblemSelection = (selectedHealthProblem: string) => {
    // Move to Screen 7 (Diet Type)
    setAppState((prev: AppState) => ({
      ...prev,
      selectedHealthProblem,
      completedSteps: [...prev.completedSteps, 'health'],
      currentStep: 7,
      currentScreen: 'diet'
    }));
  };

  const handleDietTypeSelection = (selectedDietType: string) => {
    // Move to Screen 8 (Improvement Areas)
    setAppState((prev: AppState) => ({
      ...prev,
      selectedDietType,
      completedSteps: [...prev.completedSteps, 'diet'],
      currentStep: 8,
      currentScreen: 'improvement'
    }));
  };

  const handleImprovementAreasSelection = (selectedAreas: string[]) => {
    // Move to Personalized Journey Screen
    setAppState((prev: AppState) => ({
      ...prev,
      selectedImprovementAreas: selectedAreas,
      completedSteps: [...prev.completedSteps, 'improvement'],
      currentStep: 9,
      currentScreen: 'journey'
    }));
  };

  const handleJourneyContinue = () => {
    // Reset to start of flow or go to main app
    setAppState((prev: AppState) => ({
      ...prev,
      currentStep: 1,
      currentScreen: 'sports'
    }));
  };

  const handleSkip = () => {
    // Skip current step
    setAppState((prev: AppState) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, totalSteps)
    }));
  };

  const handleBack = () => {
    if (appState.currentScreen === 'selected') {
      // Go back to sports selection
      setAppState((prev: AppState) => ({
        ...prev,
        showSelectedScreen: false,
        currentScreen: 'sports'
      }));
    } else if (appState.currentScreen === 'workout') {
      // Go back to Step 2 (Selected Sports Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 2,
        currentScreen: 'selected',
        showSelectedScreen: true
      }));
    } else if (appState.currentScreen === 'location') {
      // Go back to Step 3 (Workout Activity Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 3,
        currentScreen: 'workout'
      }));
    } else if (appState.currentScreen === 'frequency') {
      // Go back to Step 4 (Training Location Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 4,
        currentScreen: 'location'
      }));
    } else if (appState.currentScreen === 'health') {
      // Go back to Step 5 (Training Frequency Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 5,
        currentScreen: 'frequency'
      }));
    } else if (appState.currentScreen === 'diet') {
      // Go back to Step 6 (Health Problems Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 6,
        currentScreen: 'health'
      }));
    } else if (appState.currentScreen === 'improvement') {
      // Go back to Step 7 (Diet Type Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 7,
        currentScreen: 'diet'
      }));
    } else if (appState.currentScreen === 'journey') {
      // Go back to Step 8 (Improvement Areas Screen)
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: 8,
        currentScreen: 'improvement'
      }));
    } else {
      // Go back to previous step
      setAppState((prev: AppState) => ({
        ...prev,
        currentStep: Math.max(prev.currentStep - 1, 1)
      }));
    }
  };

  const renderCurrentScreen = () => {
    if (appState.currentScreen === 'selected') {
      return (
        <SelectedSportsScreen
          selectedSports={appState.selectedSports}
          allSports={sports}
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          onBack={handleBack}
          onContinue={handleContinueFromSelected}
          onEdit={handleEditSelection}
        />
      );
    } else if (appState.currentScreen === 'workout') {
      return (
        <WorkoutActivityScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedActivities={appState.selectedActivities}
          onContinue={handleWorkoutActivitySelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'location') {
      return (
        <TrainingLocationScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedLocations={appState.selectedLocations}
          onContinue={handleLocationSelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'frequency') {
      return (
        <TrainingFrequencyScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedFrequency={appState.selectedFrequency}
          onContinue={handleFrequencySelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'health') {
      return (
        <HealthProblemsScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedHealthProblem={appState.selectedHealthProblem}
          onContinue={handleHealthProblemSelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'diet') {
      return (
        <DietTypeScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedDietType={appState.selectedDietType}
          onContinue={handleDietTypeSelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'improvement') {
      return (
        <ImprovementAreasScreen
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedAreas={appState.selectedImprovementAreas}
          onContinue={handleImprovementAreasSelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    } else if (appState.currentScreen === 'journey') {
      return (
        <PersonalizedJourneyScreen
          onContinue={handleJourneyContinue}
          onBack={handleBack}
        />
      );
    } else {
      return (
        <SportsSelection
          currentStep={appState.currentStep}
          totalSteps={totalSteps}
          selectedSports={appState.selectedSports}
          onContinue={handleSportSelection}
          onSkip={handleSkip}
          onBack={handleBack}
        />
      );
    }
  };

  return (
    <ErrorBoundary>
      <ResponsiveLayout>
        {renderCurrentScreen()}
      </ResponsiveLayout>
    </ErrorBoundary>
  );
};

export default App;

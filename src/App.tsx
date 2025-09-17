import React, { useState } from 'react';
import ResponsiveLayout from './components/ResponsiveLayout';
import SportsSelection from './components/SportsSelection';
import SelectedSportsScreen from './components/SelectedSportsScreen';
import WorkoutActivityScreen from './components/WorkoutActivityScreen';
import TrainingLocationScreen from './components/TrainingLocationScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { useSports } from './hooks/useSports';

interface AppState {
  currentStep: number;
  selectedSports: string[];
  selectedActivities: string[];
  selectedLocations: string[];
  completedSteps: string[];
  showSelectedScreen: boolean;
  currentScreen: 'sports' | 'selected' | 'workout' | 'location';
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentStep: 2,
    selectedSports: [],
    selectedActivities: ['strength-training'], // Pre-select "Strenght training" to match image
    selectedLocations: ['outdoor'], // Pre-select "Outdoor" to match image
    completedSteps: [],
    showSelectedScreen: false,
    currentScreen: 'sports'
  });

  const { sports } = useSports();
  const totalSteps = 5; // Assuming 5 total steps in the flow

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
    setAppState((prev: AppState) => ({
      ...prev,
      selectedLocations,
      completedSteps: [...prev.completedSteps, 'location'],
      currentStep: Math.min(prev.currentStep + 1, totalSteps),
      currentScreen: 'sports' // Move to next screen or back to sports
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

export interface TrainingLocation {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export class LocationApiService {
  // Training location options for Screen 4
  private static trainingLocations: TrainingLocation[] = [
    {
      id: 'outdoor',
      name: 'Outdoor',
      icon: '🌿',
      description: 'Train in nature and fresh air'
    },
    {
      id: 'indoor',
      name: 'Indoor',
      icon: '🏢',
      description: 'Train in controlled environment'
    },
    {
      id: 'home',
      name: 'Home',
      icon: '🏠',
      description: 'Train in the comfort of your home'
    },
    {
      id: 'gym',
      name: 'At the gym',
      icon: '🏋️‍♀️',
      description: 'Train at a fitness facility'
    },
    {
      id: 'park',
      name: 'In the park',
      icon: '🌳',
      description: 'Train in outdoor park settings'
    }
  ];

  static async getTrainingLocations(): Promise<TrainingLocation[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return this.trainingLocations;
    } catch (error) {
      console.error('Error fetching training locations:', error);
      throw new Error('Failed to fetch training locations. Please try again later.');
    }
  }
}

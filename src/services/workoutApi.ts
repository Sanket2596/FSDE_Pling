export interface WorkoutActivity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export class WorkoutApiService {
  // Workout activity options for Screen 3
  private static workoutActivities: WorkoutActivity[] = [
    {
      id: 'strength-training',
      name: 'Strenght training',
      icon: '🏋️‍♂️',
      description: 'Build muscle and increase strength'
    },
    {
      id: 'cardio',
      name: 'Cardio',
      icon: '❤️',
      description: 'Improve cardiovascular health'
    },
    {
      id: 'yoga',
      name: 'Yoga',
      icon: '🧘‍♀️',
      description: 'Flexibility and mindfulness'
    },
    {
      id: 'low-impact',
      name: 'Low Impact exercise',
      icon: '🚶‍♀️',
      description: 'Gentle on joints and muscles'
    }
  ];

  static async getWorkoutActivities(): Promise<WorkoutActivity[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return this.workoutActivities;
    } catch (error) {
      console.error('Error fetching workout activities:', error);
      throw new Error('Failed to fetch workout activities. Please try again later.');
    }
  }
}

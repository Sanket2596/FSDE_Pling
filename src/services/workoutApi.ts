export interface WorkoutActivity {
  id: string;
  name: string;
  icon: string;
  description?: string;
  price?: number;
  status?: 'available' | 'unavailable' | 'premium';
}

export class WorkoutApiService {
  private static baseUrl = 'https://baconipsum.com/api';
  private static activityData = [
    { id: 'strength-training', name: 'Strenght training', icon: '🏋️‍♂️' },
    { id: 'cardio', name: 'Cardio', icon: '❤️' },
    { id: 'yoga', name: 'Yoga', icon: '🧘‍♀️' },
    { id: 'low-impact', name: 'Low Impact exercise', icon: '🚶‍♂️' },
    { id: 'high-intensity', name: 'High Intensity', icon: '🔥' },
    { id: 'pilates', name: 'Pilates', icon: '🤸‍♀️' },
    { id: 'swimming', name: 'Swimming', icon: '🏊‍♂️' },
    { id: 'cycling', name: 'Cycling', icon: '🚴‍♂️' }
  ];

  static async getWorkoutActivities(): Promise<WorkoutActivity[]> {
    try {
      // Fetch dynamic content from Bacon Ipsum API
      const response = await fetch(`${this.baseUrl}/?type=all-meat&paras=4&format=json`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const baconContent: string[] = await response.json();
      
      // Transform Bacon Ipsum content into workout activities
      return this.transformBaconToActivities(baconContent);
    } catch (error) {
      console.error('Error fetching workout activities:', error);
      throw new Error('Failed to fetch workout activities. Please try again later.');
    }
  }

  // Helper method to transform Bacon Ipsum content into workout activities
  private static transformBaconToActivities(baconContent: string[]): WorkoutActivity[] {
    const activities: WorkoutActivity[] = [];
    
    baconContent.forEach((paragraph, index) => {
      // Use predefined activity data
      const activityInfo = this.activityData[index % this.activityData.length];
      
      // Generate random data for each activity
      const randomPrice = Math.floor(Math.random() * 150) + 30;
      const randomStatus = ['available', 'unavailable', 'premium'][Math.floor(Math.random() * 3)] as 'available' | 'unavailable' | 'premium';
      
      activities.push({
        id: activityInfo.id,
        name: activityInfo.name,
        icon: activityInfo.icon,
        description: paragraph.substring(0, 80) + '...', // Use Bacon Ipsum for description
        price: randomPrice,
        status: randomStatus
      });
    });
    
    return activities;
  }
}

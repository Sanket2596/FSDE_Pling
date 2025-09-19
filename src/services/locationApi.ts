export interface TrainingLocation {
  id: string;
  name: string;
  icon: string;
  description: string;
  price?: number;
  status?: 'available' | 'unavailable' | 'premium';
}

export class LocationApiService {
  private static baseUrl = 'https://baconipsum.com/api';
  private static locationData = [
    { id: 'outdoor', name: 'Outdoor', icon: '🌱' },
    { id: 'indoor', name: 'Indoor', icon: '🏢' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'gym', name: 'At the gym', icon: '🏋️‍♂️' },
    { id: 'park', name: 'In the park', icon: '🌳' }
  ];

  static async getTrainingLocations(): Promise<TrainingLocation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/?type=all-meat&paras=5&format=json`);
      const baconContent: string[] = await response.json();
      
      return this.transformBaconToLocations(baconContent);
    } catch (error) {
      console.error('Error fetching training locations:', error);
      throw new Error('Failed to fetch training locations');
    }
  }

  private static transformBaconToLocations(baconContent: string[]): TrainingLocation[] {
    const locations: TrainingLocation[] = [];
    
    baconContent.forEach((paragraph, index) => {
      const locationInfo = this.locationData[index % this.locationData.length];
      
      const randomPrice = Math.floor(Math.random() * 100) + 20;
      const randomStatus = ['available', 'unavailable', 'premium'][Math.floor(Math.random() * 3)] as 'available' | 'unavailable' | 'premium';
      
      locations.push({
        id: locationInfo.id,
        name: locationInfo.name,
        icon: locationInfo.icon,
        description: paragraph.substring(0, 80) + '...',
        price: randomPrice,
        status: randomStatus
      });
    });
    
    return locations;
  }
}
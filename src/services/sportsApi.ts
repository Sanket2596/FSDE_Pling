export interface Sport {
  id: string;
  name: string;
  practices: number;
  image: string;
  color: string;
  description?: string;
  category?: string;
}

export class SportsApiService {
  private static baseUrl = 'https://www.thesportsdb.com/api/v1/json/3';

  // Mock sports data for demonstration - in a real app, this would come from an API
  private static mockSports: Sport[] = [
    {
      id: 'basketball',
      name: 'Basketball',
      practices: 4,
      image: '🏀',
      color: 'bg-orange-500',
      description: 'Fast-paced team sport with hoops and dribbling',
      category: 'Team Sports'
    },
    {
      id: 'football',
      name: 'Football',
      practices: 6,
      image: '⚽',
      color: 'bg-black',
      description: 'The beautiful game with goals and teamwork',
      category: 'Team Sports'
    },
    {
      id: 'tennis',
      name: 'Tennis',
      practices: 2,
      image: '🎾',
      color: 'bg-green-500',
      description: 'Racket sport with singles and doubles play',
      category: 'Racket Sports'
    },
    {
      id: 'swimming',
      name: 'Swimming',
      practices: 8,
      image: '🏊‍♂️',
      color: 'bg-blue-500',
      description: 'Water-based sport for all fitness levels',
      category: 'Water Sports'
    },
    {
      id: 'running',
      name: 'Running',
      practices: 12,
      image: '🏃‍♂️',
      color: 'bg-red-500',
      description: 'Cardio exercise for endurance and fitness',
      category: 'Cardio'
    },
    {
      id: 'cycling',
      name: 'Cycling',
      practices: 5,
      image: '🚴‍♂️',
      color: 'bg-yellow-500',
      description: 'Low-impact cardio on two wheels',
      category: 'Cardio'
    },
    {
      id: 'yoga',
      name: 'Yoga',
      practices: 10,
      image: '🧘‍♀️',
      color: 'bg-purple-500',
      description: 'Mind-body practice for flexibility and strength',
      category: 'Mind & Body'
    },
    {
      id: 'boxing',
      name: 'Boxing',
      practices: 3,
      image: '🥊',
      color: 'bg-gray-600',
      description: 'Combat sport for fitness and self-defense',
      category: 'Combat Sports'
    },
    {
      id: 'volleyball',
      name: 'Volleyball',
      practices: 4,
      image: '🏐',
      color: 'bg-orange-400',
      description: 'Team sport with net and ball',
      category: 'Team Sports'
    },
    {
      id: 'badminton',
      name: 'Badminton',
      practices: 3,
      image: '🏸',
      color: 'bg-green-400',
      description: 'Fast-paced racket sport',
      category: 'Racket Sports'
    },
    {
      id: 'golf',
      name: 'Golf',
      practices: 2,
      image: '⛳',
      color: 'bg-green-600',
      description: 'Precision sport with clubs and balls',
      category: 'Precision Sports'
    },
    {
      id: 'hiking',
      name: 'Hiking',
      practices: 6,
      image: '🥾',
      color: 'bg-brown-500',
      description: 'Outdoor activity for nature lovers',
      category: 'Outdoor'
    }
  ];

  static async getSports(): Promise<Sport[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would make an actual API call here
      // const response = await fetch(`${this.baseUrl}/all_sports.php`);
      // const data = await response.json();
      // return this.transformApiData(data);
      
      return this.mockSports;
    } catch (error) {
      console.error('Error fetching sports:', error);
      throw new Error('Failed to fetch sports data. Please try again later.');
    }
  }

  static async getSportsByCategory(category: string): Promise<Sport[]> {
    try {
      const sports = await this.getSports();
      return sports.filter(sport => sport.category === category);
    } catch (error) {
      console.error('Error fetching sports by category:', error);
      throw new Error('Failed to fetch sports by category.');
    }
  }

  static async searchSports(query: string): Promise<Sport[]> {
    try {
      const sports = await this.getSports();
      return sports.filter(sport => 
        sport.name.toLowerCase().includes(query.toLowerCase()) ||
        sport.description?.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching sports:', error);
      throw new Error('Failed to search sports.');
    }
  }

  // Helper method to transform API data (for when using real API)
  private static transformApiData(apiData: any): Sport[] {
    // This would transform the actual API response to our Sport interface
    // For now, we're using mock data
    return this.mockSports;
  }
}

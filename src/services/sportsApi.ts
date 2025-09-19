export interface Sport {
  id: string;
  name: string;
  practices: number;
  image: string;
  color: string;
  description?: string;
  category?: string;
  price?: number;
  status?: 'available' | 'unavailable' | 'premium';
}

export class SportsApiService {
  private static baseUrl = 'https://baconipsum.com/api';
  private static sportsNames = [
    'Basketball', 'Football', 'Tennis', 'Swimming', 'Running', 'Cycling',
    'Yoga', 'Boxing', 'Volleyball', 'Badminton', 'Golf', 'Hiking',
    'Weightlifting', 'Gymnastics', 'Surfing', 'Archery', 'Soccer', 'Baseball',
    'Hockey', 'Cricket', 'Rugby', 'Squash', 'Table Tennis', 'Martial Arts'
  ];
  private static sportsCategories = [
    'Team Sports', 'Racket Sports', 'Water Sports', 'Cardio', 
    'Mind & Body', 'Combat Sports', 'Precision Sports', 'Outdoor'
  ];
  private static sportsEmojis = [
    '🏀', '⚽', '🎾', '🏊‍♂️', '🏃‍♂️', '🚴‍♂️', '🧘‍♀️', '🥊', 
    '🏐', '🏸', '⛳', '🥾', '🏋️‍♂️', '🤸‍♀️', '🏄‍♂️', '🎯',
    '⚾', '🏒', '🏏', '🏈', '🎾', '🏓', '🥋', '🏹'
  ];
  private static colors = [
    'bg-orange-500', 'bg-black', 'bg-green-500', 'bg-blue-500', 
    'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-gray-600',
    'bg-orange-400', 'bg-green-400', 'bg-green-600', 'bg-brown-500'
  ];

  static async getSports(): Promise<Sport[]> {
    try {
      // Fetch dynamic content from Bacon Ipsum API
      const response = await fetch(`${this.baseUrl}/?type=all-meat&paras=12&format=json`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const baconContent: string[] = await response.json();
      
      // Transform Bacon Ipsum content into sports data
      return this.transformBaconToSports(baconContent);
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

  // Helper method to transform Bacon Ipsum content into sports data
  private static transformBaconToSports(baconContent: string[]): Sport[] {
    const sports: Sport[] = [];
    
    baconContent.forEach((paragraph, index) => {
      // Use proper sports names instead of Bacon Ipsum text
      const sportName = this.sportsNames[index % this.sportsNames.length];
      
      // Generate random data for each sport
      const randomCategory = this.sportsCategories[index % this.sportsCategories.length];
      const randomEmoji = this.sportsEmojis[index % this.sportsEmojis.length];
      const randomColor = this.colors[index % this.colors.length];
      const randomPractices = Math.floor(Math.random() * 10) + 1;
      const randomPrice = Math.floor(Math.random() * 200) + 50;
      const randomStatus = ['available', 'unavailable', 'premium'][Math.floor(Math.random() * 3)] as 'available' | 'unavailable' | 'premium';
      
      sports.push({
        id: `sport-${index}`,
        name: sportName,
        practices: randomPractices,
        image: randomEmoji,
        color: randomColor,
        description: paragraph.substring(0, 100) + '...', // Use Bacon Ipsum for description
        category: randomCategory,
        price: randomPrice,
        status: randomStatus
      });
    });
    
    return sports;
  }
}

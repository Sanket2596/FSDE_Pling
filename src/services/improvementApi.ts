export interface ImprovementArea {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  status?: 'available' | 'unavailable' | 'premium';
}

export class ImprovementApiService {
  private static baseUrl = 'https://baconipsum.com/api';
  private static improvementTitles = [
    'Reduce stress', 'Lose weight', 'Build muscle', 'Improve endurance',
    'Better sleep', 'Mental health', 'Increase flexibility', 'Boost energy',
    'Improve focus', 'Build confidence', 'Reduce anxiety', 'Increase strength'
  ];
  private static improvementEmojis = ['🧘‍♀️', '⚖️', '💪', '🏃‍♂️', '😴', '🧠', '🎯', '🌟', '🔥', '💎', '🤸‍♀️', '💫'];

  static async getImprovementAreas(): Promise<ImprovementArea[]> {
    try {
      // Fetch dynamic content from Bacon Ipsum API
      const response = await fetch(`${this.baseUrl}/?type=all-meat&paras=6&format=json`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const baconContent: string[] = await response.json();
      
      // Transform Bacon Ipsum content into improvement areas
      return this.transformBaconToImprovements(baconContent);
    } catch (error) {
      console.error("Error fetching improvement areas:", error);
      throw new Error("Failed to fetch improvement areas data.");
    }
  }

  // Helper method to transform Bacon Ipsum content into improvement areas
  private static transformBaconToImprovements(baconContent: string[]): ImprovementArea[] {
    const improvements: ImprovementArea[] = [];
    
    baconContent.forEach((paragraph, index) => {
      // Use proper improvement titles instead of Bacon Ipsum text
      const improvementTitle = this.improvementTitles[index % this.improvementTitles.length];
      
      // Generate random data for each improvement area
      const randomEmoji = this.improvementEmojis[index % this.improvementEmojis.length];
      const randomPrice = Math.floor(Math.random() * 150) + 30;
      const randomStatus = ['available', 'unavailable', 'premium'][Math.floor(Math.random() * 3)] as 'available' | 'unavailable' | 'premium';
      
      improvements.push({
        id: `improvement-${index}`,
        title: improvementTitle,
        description: paragraph.substring(0, 120) + '...', // Use Bacon Ipsum for description
        image: randomEmoji,
        price: randomPrice,
        status: randomStatus
      });
    });
    
    return improvements;
  }
}

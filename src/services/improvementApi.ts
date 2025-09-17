export interface ImprovementArea {
  id: string;
  title: string;
  description: string;
  image: string;
}

export class ImprovementApiService {
  // Improvement areas for Screen 8
  private static improvementAreas: ImprovementArea[] = [
    {
      id: 'reduce-stress',
      title: 'Reduce stress',
      description: 'Sports help you manage stress. Exercise causes your body to release endorphins, the chemicals that relieve pain and stress.',
      image: '🧘‍♀️'
    },
    {
      id: 'lose-weight',
      title: 'Lose weight',
      description: 'Regular exercise helps you burn calories and build muscle, leading to healthy weight loss and improved body composition.',
      image: '⚖️'
    },
    {
      id: 'build-muscle',
      title: 'Build muscle',
      description: 'Strength training and resistance exercises help you build lean muscle mass and increase overall strength.',
      image: '💪'
    },
    {
      id: 'improve-endurance',
      title: 'Improve endurance',
      description: 'Cardio exercises and endurance training improve your cardiovascular health and stamina for daily activities.',
      image: '🏃‍♂️'
    },
    {
      id: 'better-sleep',
      title: 'Better sleep',
      description: 'Regular physical activity helps regulate your sleep patterns and improves the quality of your rest.',
      image: '😴'
    },
    {
      id: 'mental-health',
      title: 'Mental health',
      description: 'Exercise releases endorphins and reduces anxiety, depression, and stress while boosting self-esteem.',
      image: '🧠'
    }
  ];

  static async getImprovementAreas(): Promise<ImprovementArea[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return ImprovementApiService.improvementAreas;
    } catch (error) {
      console.error("Error fetching improvement areas:", error);
      throw new Error("Failed to fetch improvement areas data.");
    }
  }
}

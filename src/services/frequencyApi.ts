export interface TrainingFrequency {
  id: string;
  name: string;
  value: string;
}

export class FrequencyApiService {
  // Training frequency options for Screen 5
  private static frequencies: TrainingFrequency[] = [
    {
      id: 'once-per-week',
      name: '1 time per week',
      value: '1'
    },
    {
      id: 'twice-per-week',
      name: '2 times per week',
      value: '2'
    },
    {
      id: 'thrice-per-week',
      name: '3 times per week',
      value: '3'
    },
    {
      id: 'more-than-thrice',
      name: 'more than 3 times per week',
      value: '4+'
    }
  ];

  static async getTrainingFrequencies(): Promise<TrainingFrequency[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return FrequencyApiService.frequencies;
    } catch (error) {
      console.error("Error fetching training frequencies:", error);
      throw new Error("Failed to fetch training frequencies data.");
    }
  }
}

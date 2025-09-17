export interface HealthProblem {
  id: string;
  name: string;
  value: string;
}

export class HealthApiService {
  // Health problem options for Screen 6
  private static healthProblems: HealthProblem[] = [
    {
      id: 'no-problems',
      name: 'No, I don\'t have',
      value: 'no'
    },
    {
      id: 'has-problems',
      name: 'Yes, I have',
      value: 'yes'
    }
  ];

  static async getHealthProblems(): Promise<HealthProblem[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return HealthApiService.healthProblems;
    } catch (error) {
      console.error("Error fetching health problems:", error);
      throw new Error("Failed to fetch health problems data.");
    }
  }
}

export interface DietType {
  id: string;
  name: string;
  description: string;
}

export class DietApiService {
  // Diet type options for Screen 7
  private static dietTypes: DietType[] = [
    {
      id: 'standard',
      name: 'Standard',
      description: 'Nothing special'
    },
    {
      id: 'pescetarian',
      name: 'Pescetarian',
      description: 'No meat, but fish'
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      description: 'No meat'
    },
    {
      id: 'vegan',
      name: 'Vegan',
      description: 'No animal products'
    }
  ];

  static async getDietTypes(): Promise<DietType[]> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return DietApiService.dietTypes;
    } catch (error) {
      console.error("Error fetching diet types:", error);
      throw new Error("Failed to fetch diet types data.");
    }
  }
}

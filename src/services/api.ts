export interface BaconIpsumResponse {
  [key: string]: string[];
}

export class ApiService {
  private static baseUrl = 'https://baconipsum.com/api';

  static async getBaconIpsum(
    type: 'all-meat' | 'meat-and-filler' = 'all-meat',
    sentences: number = 3,
    startWithLorem: boolean = false
  ): Promise<string[]> {
    try {
      const params = new URLSearchParams({
        type,
        sentences: sentences.toString(),
        'start-with-lorem': startWithLorem.toString(),
        format: 'json'
      });

      const response = await fetch(`${this.baseUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: string[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching bacon ipsum:', error);
      throw new Error('Failed to fetch content. Please try again later.');
    }
  }

  static async getParagraphs(
    paragraphs: number = 3,
    type: 'all-meat' | 'meat-and-filler' = 'all-meat'
  ): Promise<string[]> {
    try {
      const params = new URLSearchParams({
        type,
        paragraphs: paragraphs.toString(),
        format: 'json'
      });

      const response = await fetch(`${this.baseUrl}?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: string[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching paragraphs:', error);
      throw new Error('Failed to fetch content. Please try again later.');
    }
  }
}

export interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  greeting: string;
}

export class UserProfileApiService {
  // User profile data for personalized journey
  private static userProfile: UserProfile = {
    id: 'user-1',
    name: 'Thomas',
    avatar: '👨‍💼', // Using emoji as placeholder for avatar
    greeting: 'Hello,'
  };

  static async getUserProfile(): Promise<UserProfile> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return UserProfileApiService.userProfile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw new Error("Failed to fetch user profile data.");
    }
  }
}

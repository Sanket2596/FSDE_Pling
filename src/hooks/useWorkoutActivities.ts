import { useState, useEffect, useCallback } from 'react';
import { WorkoutApiService, WorkoutActivity } from '../services/workoutApi';

interface UseWorkoutActivitiesReturn {
  activities: WorkoutActivity[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useWorkoutActivities = (): UseWorkoutActivitiesReturn => {
  const [activities, setActivities] = useState<WorkoutActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await WorkoutApiService.getWorkoutActivities();
      setActivities(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities
  };
};

import { useState, useEffect, useCallback } from 'react';
import { LocationApiService, TrainingLocation } from '../services/locationApi';

interface UseTrainingLocationsReturn {
  locations: TrainingLocation[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useTrainingLocations = (): UseTrainingLocationsReturn => {
  const [locations, setLocations] = useState<TrainingLocation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await LocationApiService.getTrainingLocations();
      setLocations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  return {
    locations,
    loading,
    error,
    refetch: fetchLocations
  };
};

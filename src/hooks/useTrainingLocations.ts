import { useState, useEffect } from 'react';
import { LocationApiService, TrainingLocation } from '../services/locationApi';

export const useTrainingLocations = () => {
  const [locations, setLocations] = useState<TrainingLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await LocationApiService.getTrainingLocations();
      setLocations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch training locations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const refetch = () => {
    fetchLocations();
  };

  return {
    locations,
    loading,
    error,
    refetch
  };
};

import { useState, useEffect, useCallback } from 'react';
import { FrequencyApiService, TrainingFrequency } from '../services/frequencyApi';

interface UseTrainingFrequencyReturn {
  frequencies: TrainingFrequency[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useTrainingFrequency = (): UseTrainingFrequencyReturn => {
  const [frequencies, setFrequencies] = useState<TrainingFrequency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFrequencies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await FrequencyApiService.getTrainingFrequencies();
      setFrequencies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFrequencies();
  }, [fetchFrequencies]);

  return {
    frequencies,
    loading,
    error,
    refetch: fetchFrequencies
  };
};

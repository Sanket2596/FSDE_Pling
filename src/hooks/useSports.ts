import { useState, useEffect, useCallback } from 'react';
import { SportsApiService, Sport } from '../services/sportsApi';

interface UseSportsReturn {
  sports: Sport[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useSports = (): UseSportsReturn => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSports = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await SportsApiService.getSports();
      setSports(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSports();
  }, [fetchSports]);

  return {
    sports,
    loading,
    error,
    refetch: fetchSports
  };
};

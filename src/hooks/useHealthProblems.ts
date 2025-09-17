import { useState, useEffect, useCallback } from 'react';
import { HealthApiService, HealthProblem } from '../services/healthApi';

interface UseHealthProblemsReturn {
  healthProblems: HealthProblem[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useHealthProblems = (): UseHealthProblemsReturn => {
  const [healthProblems, setHealthProblems] = useState<HealthProblem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealthProblems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await HealthApiService.getHealthProblems();
      setHealthProblems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealthProblems();
  }, [fetchHealthProblems]);

  return {
    healthProblems,
    loading,
    error,
    refetch: fetchHealthProblems
  };
};

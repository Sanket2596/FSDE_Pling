import { useState, useEffect, useCallback } from 'react';
import { ImprovementApiService, ImprovementArea } from '../services/improvementApi';

interface UseImprovementAreasReturn {
  improvementAreas: ImprovementArea[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useImprovementAreas = (): UseImprovementAreasReturn => {
  const [improvementAreas, setImprovementAreas] = useState<ImprovementArea[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImprovementAreas = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ImprovementApiService.getImprovementAreas();
      setImprovementAreas(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImprovementAreas();
  }, [fetchImprovementAreas]);

  return {
    improvementAreas,
    loading,
    error,
    refetch: fetchImprovementAreas
  };
};

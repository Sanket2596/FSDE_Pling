import { useState, useEffect, useCallback } from 'react';
import { DietApiService, DietType } from '../services/dietApi';

interface UseDietTypesReturn {
  dietTypes: DietType[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useDietTypes = (): UseDietTypesReturn => {
  const [dietTypes, setDietTypes] = useState<DietType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDietTypes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await DietApiService.getDietTypes();
      setDietTypes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDietTypes();
  }, [fetchDietTypes]);

  return {
    dietTypes,
    loading,
    error,
    refetch: fetchDietTypes
  };
};

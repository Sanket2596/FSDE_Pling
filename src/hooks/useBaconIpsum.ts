import { useState, useEffect, useCallback } from 'react';
import { ApiService } from '../services/api';

interface UseBaconIpsumReturn {
  content: string[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useBaconIpsum = (
  paragraphs: number = 3,
  type: 'all-meat' | 'meat-and-filler' = 'all-meat'
): UseBaconIpsumReturn => {
  const [content, setContent] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getParagraphs(paragraphs, type);
      setContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [paragraphs, type]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return {
    content,
    loading,
    error,
    refetch: fetchContent,
  };
};

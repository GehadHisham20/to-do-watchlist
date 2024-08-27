import { useState, useEffect } from "react";
import axios from "axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });
        const response = await axios.get(url);
        setState({ data: response.data.results, loading: false, error: null });
      } catch (error: any) {
        setState({
          data: null,
          loading: false,
          error: error.message || "An error occurred",
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

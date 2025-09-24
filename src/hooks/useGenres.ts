import genres from "@/data/genres";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const [data, setData] = useState<Genre[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      try {
        setData(genres);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        setIsLoading(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { data, isLoading, error };
};

export default useGenres;

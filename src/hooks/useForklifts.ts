import { useEffect, useState } from "react";
import type { Forklift } from "../types/fortlift";
import { fetchForklifts } from "../api/ForkliftApi";

export const useForklifts=()=>{
    const [forklifts, setForklifts] = useState<Forklift[]>([]);
  const [loading, setLoading] = useState(true);

  const loadForklifts = async () => {
    setLoading(true);
    try {
      const data = await fetchForklifts();
      setForklifts(data);
    } catch {
      setForklifts([]);
      alert("Failed to load forklift data.");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadForklifts();
  }, []);

  return{
    data:forklifts,
    loading,
    loadForklifts
  }
}
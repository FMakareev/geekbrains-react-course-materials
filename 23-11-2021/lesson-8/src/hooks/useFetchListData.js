import {useCallback, useState} from "react";
import {Error} from "../components/Error";


export const useFetchListData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      setData([])

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('')
      }

      const result = await response.json();
      setData(result);
    } catch (e) {
      console.log(e);
      setError(true);
    }

    setLoading(false);
  }, [url]);

  return {
    loading,
    error,
    data,
    getData,
  }
}

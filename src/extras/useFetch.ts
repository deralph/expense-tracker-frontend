import { useCallback, useState, useEffect } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

const useFetch = (url:string) => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [loading, setloading] = useState(true);
  const [problem, setProblem] = useState(false);

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setResult(data);
    } catch (error:any) {
      // console.log(error);
      if (error.response.status === 401) navigate("/signin");

      setProblem(true);
    }
  }, [url, navigate]);
  useEffect(() => {
    setloading(true);
    fetcher();
    setloading(false);
  }, [fetcher]);

  return { result, loading, problem };
};

export default useFetch;

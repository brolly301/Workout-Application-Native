import React, { useState, useEffect } from "react";
import Exercise from "../api/Exercise";

export default useResult = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchAPI = async () => {
      try {
        const res = await Exercise.get("/exercises");
        setResults(res.data);
      } catch (err) {
        setError("Something went wrong");
      }
    };
    searchAPI();
  }, []);

  return [results, error];
};

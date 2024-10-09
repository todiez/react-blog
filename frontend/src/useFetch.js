import { useState, useEffect } from "react";
//use effect is a hook that runs a function on every render of the component, e.g. to fetch data
//useState is a hook which rerenders the component on every state change

const useFetch = (url) => {
  //custom hooks need be a function and named use....

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //use effect is a hook that runs a function on every render of the component, e.g. to fetch data
    //useState is a hook which rerenders the component on every state change

    // Initialize AbortController for cleanup
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });

        if (!response.ok) {
          throw new Error("Could not fetch the data");
        }

        const data = await response.json();
        if (!abortCont.signal.aborted) {
          setData(data);
          setIsPending(false);
        }
      } catch (err) {
        if (err.name === "AbortError") console.log("Fetch aborted");
        else {
          console.error("Fetch Error:", err);
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    //calling the async function
    fetchData();

    // Cleanup function to abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

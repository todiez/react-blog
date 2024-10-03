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

    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
            console.log(err);
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });

      setIsPending(false);
    }, 500);

    return () => abortCont.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetch;

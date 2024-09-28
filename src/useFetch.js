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
          console.log(res);
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
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });

      //fetch simulation
      setData([
        {
          title: "My new website",
          body: "lorem ipsum...",
          author: "Tobi",
          id: 1,
        },
        {
          title: "My second site",
          body: "lorem ipsum...",
          author: "Dora",
          id: 2,
        },
        {
          title: "My third website",
          body: "lorem ipsum...",
          author: "Ida",
          id: 3,
        },
      ]);
      setIsPending(false);
    }, 1000);

    console.log("use effect ran");
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

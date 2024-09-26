import BlogList from "./BlogList";
import React, { useState, useEffect } from "react";
//use effect is a hook that runs a function on every render of the component, e.g. to fetch data
//useState is a hook which rerenders the component on every state change

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    //use effect is a hook that runs a function on every render of the component, e.g. to fetch data
    //useState is a hook which rerenders the component on every state change
   

    setTimeout(() => {
      setBlogs([
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
    
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {
        /* conditional templating with && --> checks left side first, is null at the beginning and therefore does not render the right side
       after useEffect run the side is rerendered and the blogs are set so blogs is true*/
        //Props is used to pass down the blogs from the parent to the child component called BlogList.js
      }
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;

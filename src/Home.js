import BlogList from "./BlogList";
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Tobi", id: 1 },
    {
      title: "My second",
      body: "lorem ipsum",
      author: "Dora",
      id: 2,
    },
    { title: "My third website", body: "lorem ipsum...", author: "Ida", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All my blogs!'/>
      {
        //Props is used to pass down the blogs from the parent to the child component called BlogList.js
      }
    </div>
  );
};

export default Home;

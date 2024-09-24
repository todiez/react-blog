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

  const handleDelete = (id) => {
    //can be passed down as a prop as well
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
      {
        //Props is used to pass down the blogs from the parent to the child component called BlogList.js
      }
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Dora")}
        title="Dora's blogs!"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;

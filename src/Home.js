import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Tobi", id: 1 },
    {
      title: "My second website",
      body: "lorem ipsum...",
      author: "Dora",
      id: 2,
    },
    { title: "My third website", body: "lorem ipsum...", author: "Ida", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

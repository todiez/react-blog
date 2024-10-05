import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //state to keep track of the input values which can later be saved
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Dora");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  //Alternative to () => setTitle() inside onChange of the input field
  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleSubmit = async (e) => {
    // prevent default action (page refresh)
    e.preventDefault();
    //create blog object
    const blog = { title, content, author };
    console.log(blog);

    setIsPending(true);

    const response = await fetch("https://blog-backend-t7mbt.ondigitalocean.app/api/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/"); //navigate back to previous page
    });
    //const json = await response.json();
    console.log(response);
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content:</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Dora">Dora</option>
          <option value="Ida">Ida</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog..</button>}
      </form>
    </div>
  );
};

export default Create;

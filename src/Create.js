import { useState } from "react";

const Create = () => {
  //state to keep track of the input values which can later be saved
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Dora");

  //Alternative to () => setTitle() inside onChange of the input field
  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleSubmit = (e) => {
    // prevent default action (page refresh)
    e.preventDefault();
    //create blog object
    const blog = { title, body, author };
    console.log(blog);
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
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Dora">Dora</option>
          <option value="Ida">Ida</option>
        </select>
        <button>Add Blog</button>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
        <p>Author: {author}</p>
      </form>
    </div>
  );
};

export default Create;

import { useState } from "react";

const Create = () => {
  //state to keep track of the input values which can later be saved
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Dora");
  const [isPending, setIsPending] = useState(false);

  //Alternative to () => setTitle() inside onChange of the input field
  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const handleSubmit = (e) => {
    // prevent default action (page refresh)
    e.preventDefault();
    //create blog object
    const blog = { title, body, author };

    setIsPending(true);

    fetch("endpoint of Ddatabase url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
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
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog..</button>}
      </form>
    </div>
  );
};

export default Create;

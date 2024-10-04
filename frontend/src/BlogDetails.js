import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // Extracting id from URL parameters:
  const { id } = useParams();

  //hook to get the data for the blogs
  const { data: blog, error, isPending } = useFetch("/api/blogs/" + id);

  const navigate = useNavigate();

  //delete function
  const handleDelete = (e) => {
    // prevent default action (page refresh)
    e.preventDefault();

    fetch("/api/blogs/" + blog._id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
        {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.content}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

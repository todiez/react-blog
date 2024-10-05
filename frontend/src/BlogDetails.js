import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // Extracting id from URL parameters:
  const { id } = useParams();

  //hook to get the data for the blogs
  const { data: blog, error, isPending } = useFetch(process.env.REACT_APP_API_URL + id);

  const navigate = useNavigate();

  //delete function
  const handleDelete = (e) => {
    // prevent default action (page refresh)
    e.preventDefault();

    fetch(process.env.REACT_APP_API_URL + blog._id, {
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

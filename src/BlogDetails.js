import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // Extracting id from URL parameters:
  const { id } = useParams();

  //hook to get the data for the blogs
  const { data: blog, error, isPending } = useFetch("url" + id);
  console.log("data in blog details: ", blog);

  return (
    <div className="blog-details">
      <h2>Blog D'tails - {id}</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>Title: {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>Text: {blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

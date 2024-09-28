import { useParams } from "react-router-dom";

const BlogDetails = () => {
  //hook to get url parameters
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog D'tails - {id}</h2>
    </div>
  );
};

export default BlogDetails;

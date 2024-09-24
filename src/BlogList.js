const BlogList = ({ blogs, title, handleDelete }) => {
  // props object, passed down blogs are inside this object
  //and taken out of the object like the following or as a destructered object as done above
  // const blogs = props.blogs;
  // const title = props.title;

  //props in practice, just destructure and change the arrow function to
  // const BlogList = ({blogs, title})

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: blogs, isPending, error} = useFetch("https://blog-backend-t7mbt.ondigitalocean.app/api/blogs/")
  //data: blogs --> means grab the data from the custom hook and call it blogs in this context

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {
        /* conditional templating with && --> checks left side first, is null at the beginning and therefore does not render the right side
       after useEffect run the side is rerendered and the blogs are set so blogs is true*/
        //Props is used to pass down the blogs from the parent to the child component called BlogList.js
      }
      {blogs && <BlogList blogs={blogs} pageTitle="All blogs!" />}
      {/* Blogs filtered for one author
      {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Dora')} title="Dora's blogs!" />} */}
    </div>
  );
};

export default Home;

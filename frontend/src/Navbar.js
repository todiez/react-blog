import { Link } from "react-router-dom";
// the Link component is used to create links to different routes and
// implement navigation around your application without causing a full page refresh
// further, it is intercepting clicks to handle routing internally instead of a server request


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={
            //Outer curly braces: tell react that its a dynamic value
            {
              //Inner curly braces: JS Object
              color: "white",
              backgroundColor: "blue",
              borderRadius: "18px",
            }
          }
        >
          Add New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

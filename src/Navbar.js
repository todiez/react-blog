const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={
            //Outer curly braces: tell react that its a dynamic value
            {
              //Inner curly braces: JS Object
              color: "white",
              backgroundColor: "blue",
              borderRadius: '18px'
            }
          }
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

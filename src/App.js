import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        below Home but inside content component
      </div>
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      {/* Router gives access to all nested components inside App function */}
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Routes ensures that at any time only one route is displayed --> all routes need to be inside
            Navbar is shown all the time, therefore outside Routes*/}
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

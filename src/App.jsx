import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blog/:id" element={<BlogDetails />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

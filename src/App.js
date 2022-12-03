import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import "./style/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {/* */}
    
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/projects" element={<Projects></Projects>} />
            <Route path="/blog" element={<Blog></Blog>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    
    </div>
  );
}

export default App;

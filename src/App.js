import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

import "./style/App.css";
import { BlogPost } from "./components/pages/BlogPost";
import { BlogPostPage } from "./components/pages/BlogPostPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

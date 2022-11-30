import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Projects from "./components/pages/Projects";
import "./style/App.css";

import { Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <div className="App">
       {/* <video width="30% " src={require("../src/load.webm")} autoPlay  loop muted ></video> */}
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

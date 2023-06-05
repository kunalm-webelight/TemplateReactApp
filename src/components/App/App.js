import "./App.css";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import brandLogo from "./brand-1.jpg";
function App() {
  return (
    //top block
    <BrowserRouter>
      <div className="header_container">
        <div className="top-block">
          <div className="leftcontent">
            <div>info@mmt.com</div>
            <div>1+(111)1111 1111</div>
          </div>
          <div className="rightcontent">
            <div>Twitter</div>
            <div>Facebook</div>
          </div>
        </div>

        <div className="header-block">
          <div className="brand-image">
            <img src={brandLogo} alt="" />
          </div>
          <nav className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="#NA">About Us</Link>
            <Link to="#NA">Why Us</Link>
            <Link to="#NA">Testimonials</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="pages_container">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      </div>
    </BrowserRouter>

    //home compo with form
    //blog compo with blog txt
    //contact compo with contact txt
  );
}

export default App;

// hooks states props
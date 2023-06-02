import "./App.css";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
function App() {
  return (
    //top block
    <>
      <div class="top-block">
        <div class="leftcontent">
          <div>info@mmt.com</div>
          <div>1+(111)1111 1111</div>
        </div>
        <div class="rightcontent">
          <div>Twitter</div>
          <div>Facebook</div>
        </div>
      </div>

      <div class="header-block">
        <div class="brand-image">
          <img alt="MakeMyTrip" class="image" />
        </div>
      <BrowserRouter>
        <nav class="nav-bar">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="#NA">About Us</Link>
          <Link to="#NA">Why Us</Link>
          <Link to="#NA">Testimonials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
      </div>

    </>

    //home compo with form
    //blog compo with blog txt
    //contact compo with contact txt
  );
}

export default App;

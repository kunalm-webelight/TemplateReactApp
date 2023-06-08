import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Services from "../Services/Services";
import ToDo from "../../components/ToDo/ToDo.js";
import { Header } from "../Header/header.tsx";
import "./App.css";
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="pages_container" style={{height: "90vh"}}>
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/todo" element={<ToDo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}
export default App;

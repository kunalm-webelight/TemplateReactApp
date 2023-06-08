import React from "react";
import brandImage from "../../assets/mmtlogo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './header.css'
export const Header=()=>{
    const[show,setShow]=useState(false);
    const navigate = useNavigate();
const  toggleDropdown=()=>{
  setShow(!show);
}
// const hideDropDown=()=>{
//   setShow(false);
// }
const handleNavigation=(pathName)=>{
    setShow(false);
    navigate(pathName);
}
    return(
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
            <img src={brandImage} alt="" />
          </div>
          <nav className="nav-bar">
            <span onClick={()=>navigate("/home")} className="span_btn">Home</span>

            <div className="dropdown">
              <span className="dropbtn" onClick={toggleDropdown}>Services</span>
              <div className={`dropdown-content ${show?"show":""}`}>
                <span onClick={()=>handleNavigation("/services")} className="span_btn">Services</span>
                <span onClick={()=>handleNavigation("/todo")} className="span_btn">ToDo</span>
              </div>
            </div>

            <span className="span_btn">About Us</span>
            <span className="span_btn">Why Us</span>
            <span className="span_btn">Testimonials</span>
            <span onClick={()=>navigate("/blog")} className="span_btn">Blog</span>
            <span onClick={()=>navigate("/contact")} className="span_btn">Contact</span>
          </nav>
        </div>
      </div>
    );
}
import React from 'react'
import { NavLink } from 'react-router-dom';
import pay from "./images/wise.png"
import search from "./images/search.png";
import "./style.css";


import './style.css'

function Navbar2() {

    const navStyle = ({ isActive }) => {
        return { color: isActive ? "green" : "white"             
     }
    }
    const navStyle2 = ({ isActive }) => {
        return { border: isActive ? "solid 5px white" : ""           
     }
    }
    return (

        <div style={{ position: "fixed" }}>
            <div id='navbar' style={{  backgroundColor: "black", color:"white", width: "150%", height: "50px", display: "flex", wordSpacing: "3px", fontFamily: "fantasy"  }}>
                <div  >
                  <NavLink    to="/">   < img src={pay} alt="My Awesome " style={{ width: "120px", height: "46px" }} id='logo' /></NavLink> </div><div>
                <input placeholder='Search for shirts' type="textbox" style={{marginTop:"6px", marginLeft:"420px", backgroundColor: "black",height: "35px", width: "270px",color: "green",border: "solid 1px  white",borderRadius: "4px",fontSize: "20px",fontFamily: "fantasy"}}></input>
               <NavLink  style= {navStyle2}  id='navlink' to="/search" href="#"><img alt="My Awesome "src={pay}id="logo500"  style={{ width: "8px",height: "7px",borderRadius: "50%", border: "solid 1px white", marginLeft:"20px",marginTop:"10px"}}></img>&nbsp; Search</NavLink>&nbsp;

                </div>
                <div style={{ marginLeft: "200px", marginTop: "18px" }}>
                    <NavLink id='navlink'  style= {navStyle}  to="/" href="#"> Home </NavLink>&nbsp;
                    <NavLink id='navlink' style={navStyle}to="/product" href="#"> Product </NavLink>&nbsp;
                    <NavLink id='navlink' style={navStyle} to="/profile" href="#"> Profile </NavLink>&nbsp;
                    <NavLink id='navlink'style={navStyle} to="/cart" href="#"> Cart </NavLink>&nbsp;
                </div>
            </div>

        </div>

    )
}

export default Navbar2




import React from "react";
import background from "./images/B1.jpg";
import meke from "./images/tee.jpg";
import "./style.css";
import hom from "./images/4.jpg";
import pro from "./images/3.png";
import prof from "./images/14.png";
import prof2 from "./images/6.png";
import car from "./images/12.jpg";
import { NavLink } from "react-router-dom";
// import car from "./images/14.png";

function Home() {
  const kk = document.getElementById("alaye");
  const mumu = document.getElementById("mumu");
  const logo16 = document.getElementById("logo16");
  const logo17 = document.getElementById("logo17");
  const logo18 = document.getElementById("logo18");
  const logo19 = document.getElementById("logo19");
  const logo20 = document.getElementById("logo20");
  const btn = document.getElementById("btn");

  // const D = document.getElementById("D")
  // const L = document.getElementById("L")
  // const gen = document.getElementById("navbar")

  function changeColorL() {
    kk.style.backgroundImage = `url(${meke})`;
    mumu.style.color = "grey";
    // L.style.backgroundColor = "black"
    // D.style.backgroundColor = "white"
    // gen.style.backgroundColor = "brown"
  }
  function changeColorD() {
    kk.style.backgroundImage = `url(${background})`;
    mumu.style.color = "black";
    // D.style.backgroundColor = "white"
    // L.style.backgroundColor = "black"
    // gen.style.backgroundColor = "black"
  }

  return (
    <div
      id="alaye"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        width: "100%",
        height: "490px",
        marginTop: "-2px",
      }}
    >
      <button
        id="L"
        onClick={changeColorL}
        style={{
          height: "30px",
          width: "30px",
          marginLeft: "30px",
          marginTop: "60px",
          fontSize: "20px",
          fontFamily: "fantasy",
          color: "GrayText",
          borderRadius: "50%",
        }}
      >
        Dark{" "}
      </button>
      <button
        id="D"
        onClick={changeColorD}
        style={{
          height: "30px",
          width: "30px",
          marginTop: "60px",
          fontSize: "20px",
          fontFamily: "fantasy",
          color: "GrayText",
          borderRadius: "50%",
        }}
      >
        Light{" "}
      </button>
      <div>
        <h1 id="mumu" style={{ fontSize: "40px", fontFamily: "fantasy",  marginLeft: "590px",
            marginTop: "200px",
          }}
        >
          {" "}
          Jiggy Online Cloth Store
        </h1>
        <button id="btn"style={{height: "50px",width: "200px",marginLeft: "640px",fontSize: "20px",fontFamily: "fantasy",color: "GrayText"}}
 >
          {" "}
          Register
        </button>
      </div>

      {/* <div style={{backgroundColor:"pink" ,height:"90px"}}> */}
      <div
        style={{
          height: "50px",
          width: "300px",
          marginTop: "440px",
          marginLeft: "-1050px",
        }}
      >
        <NavLink to="/">
          {" "}
          <img
            alt="My Awesome "
            src={hom}
            id="logo16"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "solid 2px white",
            }}
          />
        </NavLink>
        &nbsp;
        <NavLink to="/product">
          <img
            alt="My Awesome "
            src={pro}
            id="logo17"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "solid 2px white",
            }}
          />
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/profile">
          <img
            alt="My Awesome "
            src={prof}
            id="logo18"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "solid 2px white",
            }}
          />
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/search">
          <img
            alt="My Awesome "
            src={car}
            id="logo19"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "solid 2px white",
            }}
          />
        </NavLink>{" "}
        &nbsp;
        <NavLink to="/cart">
          {" "}
          <img
            alt="My Awesome "
            src={prof2}
            id="logo20"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "solid 2px white ",
            }}
          />
        </NavLink>{" "}
        &nbsp;<br></br>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import jt from "./images/jt.jpeg";
import nlogo from "./images/nlogo.png";
import vans from "./images/vans.jpeg";
import y from "./images/y.png";
import n from "./images/n.png";
import m from "./images/m.png";
import ba from "./images/ba.jpeg";
import bt from "./images/bt.png";
import by from "./images/by.png";
import of from "./images/of.jpg";
import po from "./images/po.jpg";
import pm from "./images/pm.jpg";
import nm from "./images/nm.png";
import hw from "./images/hw.jpg";
import he from "./images/he.jpg";
// import et from './images/et.png'
import hm from "./images/hm.png";
import su from "./images/su.png";
import um from "./images/um.jpg";
import th from "./images/th.jpg";
import yellbanner from './images/pvc3.jpg'


function Add() {
    const logo1 = document.getElementById("logo1");
    const logo2 = document.getElementById("logo2");
    const logo3 = document.getElementById("logo3");
    const logo4 = document.getElementById("logo4");
    const logo5 = document.getElementById("logo5");
    const logo6 = document.getElementById("logo6");
    const logo7 = document.getElementById("logo7");
    const logo8 = document.getElementById("logo8");
    const logo9 = document.getElementById("logo9");
    const logo10 = document.getElementById("logo10");
    const logo11 = document.getElementById("logo11");
    const logo12 = document.getElementById("logo12");
    const logo13 = document.getElementById("logo13");
    // const logo14 = document.getElementById("logo14")
    const logo15 = document.getElementById("logo15");
    const logo16 = document.getElementById("logo16");
    const logo17 = document.getElementById("logo17");
    const logo18 = document.getElementById("logo18");
    const logo19 = document.getElementById("logo19");
    const logo20 = document.getElementById("logo20");
    const logo21 = document.getElementById("logo21");
    // const logo22 = document.getElementById("logo22")
    const logo23 = document.getElementById("logo23");

    function up() {
        logo1.style.border = "solid 2px lime";
        logo1.style.marginBottom = "10px";
        // logo1.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
        logo1.style.transition =
            "transform 1.3s cubic-bezier(0.400, 0.985, 0.52, 1.375);";
    }
    return (
     <div id="alaye"style={{backgroundImage: `url(${yellbanner})`,backgroundRepeat: "no-repeat", backgroundSize: "cover",display: "flex",width: "100%",height: "580px", marginTop: "-2px", }}>

        <div style={{ marginTop: "400px", marginLeft: "550px" }}>
          <button style={{ border:"" ,height: "40px", width: "200px",fontSize: "20px",textAlign: "center",fontFamily: "fantasy" }}> Shop Now</button>
        </div>
     
     <div style={{marginLeft:"-170px"}}> 
        <div style={{ backgroundColor: "",height: "70px", width: "310px",color: "white",border: "solid 3px  white",borderRadius: "10px",marginTop: "290px",marginLeft: "-80px",fontSize: "20px",textAlign: "center",fontFamily: "fantasy",justifyContent:"center"}}> 
        {" "}  <br></br> Jiggy Stores
         </div>

        </div>

            <div style={{ height:"50px" ,width:"300px",marginTop:"310px", marginLeft:"-600px"}}>
              <img alt="My Awesome "src={nlogo}id="logo1"style={{width: "40px",height: "40px",borderRadius: "50%", border: "solid 2px white",}}/>
              &nbsp;
              <img alt="My Awesome " src={vans} id="logo2"  style={{width: "40px",height: "40px", borderRadius: "50%", border: "solid 2px white", }}/>
              &nbsp;
              <img alt="My Awesome "src={y} id="logo3" style={{width: "40px", height: "40px", borderRadius: "50%", border: "solid 2px white",}} />
              &nbsp;
              <img alt="My Awesome "src={m} id="logo4"style={{width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white", }}/>
              &nbsp;
              <img alt="My Awesome "src={hw}id="logo5" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "solid 2px white",}}/> 
            </div>
<br></br>
        
            <div style={{ height:"50px" ,width:"300px",marginTop:"300px", marginLeft:"400px"}}>
                    <img alt="My Awesome "src={n}id="logo6"  style={{ width: "40px", height: "40px",borderRadius: "50%",border: "solid 2px white",}}/>
                    &nbsp;
                    <img alt="My Awesome "src={jt}id="logo7"style={{width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white",}}/>
                    &nbsp;
                    <img alt="My Awesome "src={of}id="logo8" style={{ width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white",}} />
                    &nbsp;
                    <img alt="My Awesome " src={ba} id="logo9" style={{width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white", }}/>
                    &nbsp;
                    <img alt="My Awesome "src={by}id="logo23" style={{ width: "40px", height: "40px", borderRadius: "50%",border: "solid 2px white",}}/>
            </div>
              &nbsp;

        <div style={{ backgroundColor:"white" ,height:"40px" ,width:"144px",marginTop:"529px", marginLeft:"-1220px"}}>

                <img alt="My Awesome "src={bt}id="logo10" style={{ width: "20px",height: "20px",borderRadius: "50%",border: "solid 2px white",}}/>
              &nbsp;
              <img alt="My Awesome "src={hm}id="logo11" style={{width: "20px",height: "20px",borderRadius: "50%",border: "solid 2px white", }}/>
              &nbsp;
              <img alt="My Awesome "src={su}id="logo12"style={{width: "20px", height: "20px",borderRadius: "50%", border: "solid 2px white",}}/>
              &nbsp;
              <img alt="My Awesome "src={pm}id="logo13"style={{width: "20px",height: "20px",borderRadius: "50%",border: "solid 2px white"}}/>
              &nbsp;
                <img alt="My Awesome "src={he}id="logo15" style={{width: "20px", height: "20px", borderRadius: "50%",border: "solid 2px white" }} />
        </div>
           
            {/* <div style={{backgroundColor:"pink" ,height:"90px"}}>
                    <img alt="My Awesome "src={nm} id="logo16"onMouseOver={upg}onMouseOut={upg1}style={{ width: "40px", height: "40px",  borderRadius: "50%", border: "solid 2px white",}}/>
                    &nbsp;
                    <img alt="My Awesome "src={po}id="logo17"onMouseOver={uph}onMouseOut={uph1} style={{ width: "40px", height: "40px", borderRadius: "50%",  border: "solid 2px white", }} />
                    &nbsp;
                    <img alt="My Awesome " src={th} id="logo18"onmouseOver={upj}onMouseOut={upj1} style={{ width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white",}}/>
                    &nbsp;
                    <img alt="My Awesome "src={um}id="logo19"onMouseOver={upk} onMouseOut={upk1}style={{ width: "40px", height: "40px", borderRadius: "50%",  border: "solid 2px white", }}/>
                    &nbsp;
                    <img
                    alt="My Awesome "src={su}id="logo20"onMouseOver={upl}onMouseOut={upl1} style={{width: "40px",height: "40px",borderRadius: "50%",border: "solid 2px white ",}}/>
                    &nbsp;<br></br>
                </div> */}

                </div>
    //  </div>
    );}

export default Add;

import React,{ useEffect, useState } from "react";

import Navbar from "./Navbar";
import Menuo from "./Menuo";


function layout({ children }) {

 const [esVisible, setEsVisible] = useState(false);

 useEffect (()=>{
  const OcultarMenu = () =>{
    if(window.innerWidth > 768 && esVisible){
      setEsVisible(false);
    }
  };


  window.addEventListener("resize",OcultarMenu);

  return()=>{
    window.removeEventListener("resize",OcultarMenu);
  };
 });

  const toogleOpen = () => {
    setEsVisible(!esVisible);
  };


  return (
    <div className="h-screen">
      <Navbar toogleOpen={toogleOpen} />
      {esVisible && <Menuo toogleOpennew={toogleOpen}/>}
      {children}
    </div>
  )
}

export default layout;
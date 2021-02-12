import React from "react";
import './UserOutput.css';

const userOutput = (props)=>{
  const clickit=()=>{
    console.log("clicked!")
  }
  return(
    <div>
  <p onClick={props.changeUser}>Hi, I'm {props.name}, click me to see my last name</p>
  <p>Hi, I'm another user output paragraph</p>
  </div>
  )
}

export default userOutput;

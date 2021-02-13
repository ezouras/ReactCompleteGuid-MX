import React from "react";
import './CharComponent.css';

const charComponent=(props)=>{

  return(
    <div>
    Hi, i'm a char comopnent
    <div onClick={props.removeClick} className="box">{props.letter}</div>
    </div>

  )
}

export default charComponent;

import React from "react";
import './ValidateComponent.css';

const validateComponent=(props)=>{
    let validation =props.tally>4?(<p>More than 5! valid!</p>):(<p>NOT VALID!</p>)

  return(
    <div>
      <p>5 chars are required</p>
      {validation}
    </div>

  )
}

export default validateComponent;

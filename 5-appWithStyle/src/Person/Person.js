import React from 'react';
import './Person.css';
import Radium, { StyleRoot } from "radium";
const person=(props)=>{
  //note this is in the funcitno so we need to define it as const or let or whatever
  //it is NOT in the return statement
  const style = {
    '@media(min-width:500px)':{
      width:'450px'
    }
  }

return(
  <StyleRoot>
    <div className="Person" style={style}>
      <p  onClick={props.click}>I'm a {props.name}  and I am {Math.floor(Math.random()*50)}
        and I have a pet {props.pet}</p>
      <p>{props.children}</p>
      <input onChange={props.inputHandler} type="text"/>
  </div>
</StyleRoot>
);
}
export default Radium(person);

import React from 'react';
import './Person.css';
const person=(props)=>{
return(
  <div className="Person">
    <p  onClick={props.click}>I'm a {props.name}  and I am {Math.floor(Math.random()*50)}
      and I have a pet {props.pet}</p>
    <p>{props.children}</p>
    <input onChange={props.inputHandler} type="text"/>
</div>
)
}
export default person;

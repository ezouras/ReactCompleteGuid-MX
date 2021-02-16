import React from 'react';
import './Person.css';
import styled from 'styled-components'
const person=(props)=>{
  //create a component -capped because you use it in the
  //return function as a regular div
  //it is a function where you pass everythin  between the ticks
  //it returned a react component that you use directly
  const StyledDiv=styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  @media(min-width:500px) {
      width: 450px;
    }
  `;


return(
    <StyledDiv>
      <p  onClick={props.click}>I'm a {props.name}  and I am {Math.floor(Math.random()*50)}
        and I have a pet {props.pet}</p>
      <p>{props.children}</p>
      <input onChange={props.inputHandler} type="text"/>
</StyledDiv>

);
}
export default person;

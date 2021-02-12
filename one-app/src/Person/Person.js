import React from 'react';
import './Person.css';
//you don't need to import '{Component}' because
//we are not using classes

//various way to create a function:
/***ES6 - recommended way***/
/* note there is no render methd that returns something*/
const person=(props)=>{
  //props could be any name. it's the argument
// you don't need to wrap () unless you want to use multiple lines
//return <p>I'm a {props.name}  and I am {Math.floor(Math.random()*30)} and I have a pet {props.pet}</p>
 //onClick={props.changeNameHandler}
return(
  <div className="Person" onClick={props.changeNameHandler}>
    <p>I'm a {props.name}  and I am {Math.floor(Math.random()*50)}
      and I have a pet {props.pet}</p>
    <p>{props.children}</p>
    <input onChange={props.nameEnteredHandler} type="text"/>
</div>
)
}
//note that you can only acces props that were
//passed to the Person in the parent.catch
//so, if I didn't pass "nameEnteredHandler" from the parent, it wont
//work ont he child

/***old way***/
/*function Person(){
    return <h2>hi</h2>
}*/


/***ES5 way***/
/*var person = function(){
  return <h2>hi</h2>
}
*/
export default person;
//be sure to capitolize "p" if you are using the other ways

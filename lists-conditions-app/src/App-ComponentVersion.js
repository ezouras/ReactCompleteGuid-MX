//for the react.createElement methd ot work, need to import react
import React, {Component} from 'react';
import './App.css';
//the name could be anything. and it should be uppercase
import Person from "./Person/Person"

class App extends Component{
  //state data could be anything you want
  state = {
      persons:[
        {name: "Max", age:28},
        {name:"Stefanie",age:57}
      ]
  }

  switchNameHandler=()=>{
    console.log("button clicked!")
  //DONT DO THIS!  this.state.persons[0].name = "Evie";
  this.setState({persons:[
    {name: "Evie", age:28},
    {name:"Stefanie",age:57}
  ]})
  }
  render(){
    return (
    <div className ="App">
      <h1> Hi, I'm a react app!</h1>
      <button onClick={this.switchNameHandler}>switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name="Julie" pet="dog"></Person>
      <Person name="Grant" pet="cat"></Person>
      <Person name="Alethea" pet="giraffe">My hobby is math!</Person>
      <Person name="Cyndi" pet="lizard"></Person>
    </div>
  );
}
  //the above is really calling the below (see jsx file in the root folder)
  //return React.createElement("div",null,"h1","Hi, I\'m a react app!")
  //return React.createElement("div",null,React.createElement("h1",null,"Hi, I\'m a react app!"));
  //adding style to the above:

  //return React.createElement("div",{className:'app'},React.createElement("h1",null,"Hi, I\'m a react app!"));

}

export default App;

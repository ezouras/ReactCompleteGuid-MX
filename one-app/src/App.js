import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component{
  state = {
      persons:[
        {name: "Max", age:28},
        {name:"Stefanie",age:57}
      ]
  }

  switchNameHandler=(newName)=>{
    console.log("button clicked!")
  this.setState(
  {
    persons:[
      {name: newName, age:28},
      {name:"Stefanie",age:57}
    ]})}

nameChangeHandler=(event)=>{
  this.setState(
  {
    persons:[
      {name: "Max", age:28},
      {name:event.target.value,age:57}
    ]})}

  render(){
    //this is js, values need to be strings
    //this is just a normal js const
    const style={
      backgroundColor:'white',
      font:"inherit",
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    return (
    <div className ="App">
      <h1> Hi, I'm a react app!</h1>
      <button
        style={style}
        onClick={()=>this.switchNameHandler("Nicky")}>switch name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>
      </Person>
      <Person
        name="Julie"
        pet="dog">
      </Person>
      <Person
        name={this.state.persons[1].name}
        pet={this.state.persons[1].age}>
      </Person>
      <Person name="Alethea"
        pet="giraffe"
        changeNameHandler={this.switchNameHandler.bind(this,"Nicole!")}
        nameEnteredHandler={this.nameChangeHandler}
        >My hobby is math!</Person>
      <Person name="Cyndi" pet="lizard"></Person>
    </div>
  );
}

}

export default App;

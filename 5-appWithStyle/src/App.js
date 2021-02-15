import React, {Component} from 'react';
import Radium, { StyleRoot } from "radium";
import './App.css';
import Person from "./Person/Person"

class App extends Component{
  //in the class, don't say "const" or "let"
  state = {
      persons:[
        {id:1, name: "Max", age:28},
        {id:2, name:"Stefanie",age:57},
        {id:3, name:"Alethea",age:9}
      ],
      showPersons:false
  }


nameChangeHandler=(id,e)=>{
  //persons is an array ; it is what map returns
  let persons=[...this.state.persons].map(person=>{
    if(person.id===id){
      person.name = e.target.value;
    }
    return person
  });
  this.setState({persons:persons})
}

togglePersonHandler=()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow})
  console.log("does show is ", doesShow)
}

deletePersonHandler = (personIndex)=>{
const persons = [...this.state.persons]//creates a new array
//update in an unmutable way
  console.log("clicked! persons are ", persons)
  persons.splice(personIndex,1);
  this.setState({persons:persons})

//can't access a string in the class from render method. not sure why
//you can access the functions
//classRedBold = ["red","bold"].join(" ");//join the items to make a string with a space inbetween

}

  render(){
    //don't confuse 'render' with return
    //these items are defined in teh method
    //let classRedBold = ["red","bold"].join(" ");//join the items to make a string with a space inbetween

//you no longer have the join, so add it to the item in the return methd
    const classRedBold =[];

    if(this.state.persons.length < 3){
      classRedBold.push("red");
    }
    if(this.state.persons.length < 2){
      classRedBold.push("bold");
    }

//you add ":hover" in strings (you cna do this because of radium)
//beause properties like 'border' are recognized as properties and
//:hover is not.  you can add ANY pseudo item by placing in quotes
    const style={
      backgroundColor:'green',
      color:'white',
      font:"inherit",
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:"lightgreen",
        color:"darkgreen"
      }
    };

    let persons = null;

    if(this.state.showPersons){
      //this is simply a js function
      //we are doing two things, setting "persons"
      //and seting the style constants background color
      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              inputHandler={(event)=>this.nameChangeHandler(person.id,event)}
              key={person.id}/>
            })
          }
        </div>
      );
      console.log("persons are ", persons)
      //the page rerenders when you click the button
      //because it is part of the state
      //when not showing persons, this line never runs during the re-render
      style.backgroundColor = 'red'
      style[":hover"]={
        backgroundColor:"orange",
        color:'black'
      }
    }
    return (
      <StyleRoot>
        <div className ="App">
          <h1> Hi, I'm a react app!</h1>
          <p className={classRedBold.join(" ")}>There are persons in this app</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>hide/display people
          </button>
          {persons}
        </div>
    </StyleRoot>
  );
}

}
//essentially you are wrapping your component with another component
//that adds some additional functionality for styling
export default Radium(App);

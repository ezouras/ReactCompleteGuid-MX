import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

//this is outside of the class
//you write REGULAR css, no quotes needed


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
  console.log("clicked! persons are ", persons)
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

  render(){
    const classRedBold =[];

    if(this.state.persons.length < 3){
      classRedBold.push("red");
    }
    if(this.state.persons.length < 2){
      classRedBold.push("bold");
    }


    let persons = null;

    if(this.state.showPersons){
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
      /*style.backgroundColor = 'red'
      style[":hover"]={
        backgroundColor:"orange",
        color:'black'
      }
      */
    }
    return (
        <div className ="App">
          <h1> Hi, I'm a react app!</h1>
          <p className={classRedBold.join(" ")}>There are persons in this app</p>
          <button class="button" onClick={this.togglePersonHandler}>
            hide/display people
          </button>
          {persons}
        </div>
  );
}

}

export default App;

import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component{
  state = {
      persons:[
        {id:1, name: "Max", age:28},
        {id:2, name:"Stefanie",age:57},
        {id:3, name:"Alethea",age:9}
      ],
      showPersons:false
  }


nameChangeHandler=(id,e)=>{
  let persons=[...this.state.persons].map(person=>{
    if(person.id===id){
      person.name = e.target.value;
    }
    return person
  });
  //persons remove old person, add new person


  this.setState({persons:persons})
}

togglePersonHandler=()=>{
  const doesShow = this.state.showPersons;
  //remember, for setState (not user state), the objects rae being
  //merged, not replaced
  this.setState({showPersons:!doesShow})
  console.log("does show is ", doesShow)
}

deletePersonHandler = (personIndex)=>{
  //you shoudl NOT do this! const persons = this.state.persons;
  //you are directly accessing the state. instead slice it, then update
//  const persons = this.state.persons.slice();
//or
const persons = [...this.state.persons]//creates a new array
//update in an unmutable way
  console.log("clicked! persons are ", persons)
  persons.splice(personIndex,1);
  this.setState({persons:persons})

}

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

    //this gets executed before returning so you can take advantage of this
    let persons = null;//when "rerendering" this page, persons is always false
    //in the futre it will be updated by the dom

//remember, "persons" is in the template. so what you
//have must be in {} so that it knows to execute it
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
      )
    }
    return (
    <div className ="App">
      <h1> Hi, I'm a react app!</h1>
      <button
        style={style}
        onClick={this.togglePersonHandler}>hide/display people
      </button>
      {persons}
    </div>
  );
}

}

export default App;

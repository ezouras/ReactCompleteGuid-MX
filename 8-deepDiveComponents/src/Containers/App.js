import React, {Component} from 'react';
import styles from './App.module.css';
import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Egg from "../Components/Egg/Egg";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


class App extends Component{
    constructor(props){
      super(props);
      console.log('app.js constructor')
      //you could initialize state here
      this.state = {
            persons:[
              {id:1, name: "Max", age:28},
              {id:2, name:"Stefanie",age:57},
              {id:3, name:"Alethea",age:9}
            ],
            showPersons:false
        }}

  // in modern browsers, this actually CALLS the constructor for you
  //it calls "super" for you. but in the end it is doing what we
  //will do explicitl for demo purposes here
/*  state = {
      persons:[
        {id:1, name: "Max", age:28},
        {id:2, name:"Stefanie",age:57},
        {id:3, name:"Alethea",age:9}
      ],
      showPersons:false
  }
  */

  static getDerivedStateFromProps(props,state){
    console.log("app.js get derived state from props", props)
    return state;
  }

  componentDidMount(){
    console.log("app.js component did mount")
  }


nameChangeHandler=(id,e)=>{
  //update psersons name
  let persons=[...this.state.persons].map(person=>{
    if(person.id===id){
      person.name = e.target.value;
    }
    return person
  });
  //set the state with new person name
  this.setState({persons:persons})
}

togglePersonHandler=()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow})
}

deletePersonHandler = (personIndex)=>{
const persons = [...this.state.persons]//creates a new array
  console.log("clicked! persons are ", persons)
  persons.splice(personIndex,1);
  this.setState({persons:persons})
}

//render is like ngoninit
  render(){
    console.log("running app.js render")
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked ={this.deletePersonHandler}
            changed = {this.nameChangeHandler}/>
        </div>
      );
    }
    //this is like the html template
    return (
        <div className ={styles["App"]}>
          <Egg
            title = {this.props.appTitle}
            persons={this.state.persons}
            click={this.togglePersonHandler
            }/>
          {persons}
        </div>
  );
}

}

export default App;

import React, {Component} from 'react';
import Person from "./Person/Person";

//IF YOU comment out the render  map
//and use instead of getPersons, that works also

class Persons extends Component{
  /* this is outdated, it works but you get an error
  static getDerivedStateFromProps(props,state){
    console.log("persons.js getDerivedStateFromProps method")
    return state; //returned an nchange state, but
    //there is no state in this component so it's an empty objuect
  }
  */

  /*outdated
  componentWillReceiveProps(props){
    console.log("persons.js comopnetWill receive props props : ",props)
  }
  */

  shouldComponentUpdate(nextProps,nextState){
    console.log("persons.js shouldComponentUpdate method")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("persons.js getSnapshotBeforeUpdate method")
    return {message:"snapshot!"};
  }

  componentDidUpdate(prevProps,prevState,snapshotty){
    console.log("persons.js component did update method")
    //returns what you return from getSnapshotBeforeUpdate!
    console.log(snapshotty)
  }
  getPersons =()=>{
    return this.props.persons.map((person,index)=>{
    //NEED RETURN
      return <Person
      click={()=>this.props.clicked(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      inputHandler={(event)=>this.props.changed(person.id,event)}
      />
    })
  }
  render(){
    console.log("persons.js rendering...")
    //return this.props.persons.map((person,index)=>{
      return(
          /*<Person
          click={()=>this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          inputHandler={(event)=>this.props.changed(person.id,event)}
            />*/
            this.getPersons()
        );
//  });
}
}


export default Persons;

import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person"

const App = props =>{
  const [personState, setPersonState]=useState(
    {
        persons:[
          {name: "Max", age:28},
          {name:"Stefanie",age:57}
        ]
    });
    const [otherState,setOtherState] = useState("this is anohter state");

//yes, it's a function within a function
//because this is no longer inside of a class, you can remove 'this'
    const switchNameHandler=()=>{
      console.log("button clicked!")
    setPersonState({
      persons:[
        {name: "Evie", age:50},
        {name:"Stefanie",age:17}
      ]
    })
    console.log("otherstate is ",otherState);
    console.log("person state is ",personState);
    }


  return (
    <div className ="App">
      <h1> Hi, I'm a react app!</h1>
      <button onClick={switchNameHandler}>switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name="Julie" pet="dog"></Person>
      <Person name="Grant" pet="cat"></Person>
      <Person name="Alethea" pet="giraffe">My hobby is math!</Person>
      <Person name="Cyndi" pet="lizard"></Person>
    </div>
  );
}





export default App;

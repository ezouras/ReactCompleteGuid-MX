import React, {Component} from "react";
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";

class App extends Component{
  state = {
    users:[
    {name:"Evie", title:"Software Engineer"},
    {name:"Jerry", title:"Software Engineer"},
    {name:"Alethea", title:"Software Architect"}
  ]
}

changeUserNameHandler=(event)=>{
  console.log("button clicked")
  this.setState(
    {
    users:[
      {name:"Evie Zouras", title:"Software Engineer"},
      {name:"Jerry Morrow", title:"Software Engineer"},
      {name:"Alethea Zouras Morrow", title:"Software Architect"}
]}
)
}

nameEnteredHandler=(event)=>{
  console.log("text entered! ",event.target.value)
  this.setState(
    {
    users:[
      {name:event.target.value, title:"Software Engineer"},
      {name:"Jerry Morrow", title:"Software Engineer"},
      {name:"Alethea Zouras Morrow", title:"Software Architect"}
]}
)
}

  render(){
    return (
    <div className="App">
  <h1>Welcome to my first app!</h1>
  <UserInput enterNameHandler={this.nameEnteredHandler}></UserInput>
  <UserOutput name={this.state.users[0].name} changeUser={this.changeUserNameHandler}></UserOutput>
  <UserOutput name={this.state.users[1].name} changeUser={this.changeUserNameHandler}></UserOutput>
  <UserOutput name={this.state.users[2].name} changeUser={this.changeUserNameHandler}></UserOutput>
    </div>
  );
}
}

export default App;

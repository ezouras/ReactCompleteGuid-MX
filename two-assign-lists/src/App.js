import React,{Component} from "react";
import ValidateComponent from "./ValidateComponent/ValidateComponent";
import CharComponent from "./CharComponent/CharComponent";

import './App.css';

class App extends Component{
  state={
    tally:0,
    chars:[]
  }

  inputTallyHandler=(event)=>{
    let value = event.target.value;
    let arrV = String(event.target.value||"").split("");
    this.setState({tally:value.length});
    this.setState({chars:arrV});
  }

  deleteCharBoxHandler=(event,index)=>{
      let cInput = [...this.state.chars];
      let nInput = cInput.filter((char,indx)=>indx!==index)
      this.setState({ chars:nInput});
  }


  render(){
    let boxes = (
      <div>
      {
        this.state.chars.map((char,indx)=>{
            return <CharComponent
                      letter={char}
                      key={indx}
                      removeClick={(event)=>this.deleteCharBoxHandler(event,indx)}>
                    </CharComponent>
      })
      }
    </div>
    )



    return (
      <div className="App">
        <h2>Enter text; char tally will display</h2>
        <input onChange={this.inputTallyHandler} type="text"/>
        <p>tally is: {this.state.tally}</p>
        <ValidateComponent tally={this.state.tally}></ValidateComponent>
        {boxes}
  </div>
 )
}
}

export default App;

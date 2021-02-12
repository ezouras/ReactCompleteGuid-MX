import react from "react";
import UserInput from "./UserInput.css";

const userInput = (props)=>{


  const nameEnteredHandler=(event)=>{
    console.log("input entered!",event.target.value)
  }
return(
  <div>
<h1>Change Evies Name!</h1>
<input onChange={props.enterNameHandler} type="text"/>
</div>
)

}

export default userInput;

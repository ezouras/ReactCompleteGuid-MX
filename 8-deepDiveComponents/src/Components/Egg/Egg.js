import React from "react";
import styles from "./Egg.module.css"

const egg=(props)=>{
  //this gets called every "render" time in App.js?
  console.log('rendering egg.js')
  const classRedBold =[];
  if(props.persons.length < 3){
    classRedBold.push("red");
  }
  if(props.persons.length < 2){
    classRedBold.push("bold");
  }

  return(
    <div className={styles["Egg"]}>
      <h1>{props.title}</h1>
      <p className={styles[classRedBold.join(" ")]}>There are persons in this app</p>
      <button className={styles["button"]} onClick={props.click}>
        hide/display people
      </button>
    </div>
)
}

export default egg;

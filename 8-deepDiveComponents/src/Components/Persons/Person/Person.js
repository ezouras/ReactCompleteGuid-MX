import React, {Component} from 'react';
import styles from './Person.module.css';


class Person extends Component{
  render(){
  console.log("person.js rendering..")
  return(
    <div className={styles["Person"]}>
      <p  onClick={this.props.click}>I'm a {this.props.name}  and I am {Math.floor(Math.random()*50)}
        and I have a pet {this.props.pet}</p>
      <p>{this.props.children}</p>
      <input onChange={this.props.inputHandler} type="text"/>
      <button>I'm a button</button>
    </div>
  );
  }
}

//before it was lowercase because the const was a lowercase
export default Person;

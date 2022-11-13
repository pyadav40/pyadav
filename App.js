// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Child from "./child";
import { First, Second } from "./child";
const App=()=> {
  var n=16;
  if (n%2===0)
  {
    return (
      <>
        <h1>App compnenet </h1>
        <Child name="Harry" add="Pune"/>
        <First name1="Lucy" add1="Bhopal"/>
      </>
    )
  }
  else
  {
    return (
      <>
        <h1>App compnenet </h1>
        <Second/>
      </>
    )
  }
  
}

export default App;

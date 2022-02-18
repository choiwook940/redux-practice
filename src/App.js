import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './components/counter/Counter';
// import { Test1 } from './components/test1/Test1';
// import { Test2 } from './components/test2/Test2';
import Subject from "./components/subject/Subject"
import Nav from "./components/nav/Nav"
import Control from "./components/control/Control"
import Article from "./components/article/Article"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Subject />
        <Nav />
        <Control />
        <Article />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div id="red"><Test1 /></div>
        <div id="green"><Test1 /></div>
        <div id="blue"><Test1 /></div> */}
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;

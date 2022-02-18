import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styles from './Test2.module.css';
import { createStore } from 'redux';


export function Test2() {

  function handleButtonClick(e) {
    console.log(e)
  }

  return (
    <div>
      <h1>WEB</h1>
      <ol>
        <li><a href='1.html'>HTML</a></li>
        <li><a href='2.html'>CSS</a></li>
      </ol>
      <ul>
        <li><a href="/create">create</a></li>
        <li><input type="button" value="delete" /></li>
      </ul>
      <h2>HTML</h2>
      <p>HTML is...</p>
    </div>
  );
}

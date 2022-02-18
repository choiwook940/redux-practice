import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Test1.module.css';
import { createStore } from 'redux';


function reducer(state, action) {
  if(state === undefined) {
    return {color: 'yellow'}
  }
  var newState;
  if(action.type === 'CHANGE_COLOR') {
    newState = Object.assign({}, state, {color: action.color})
  }
  console.log(action.type, state, newState)
  return newState
}
const store = createStore(reducer)

export function Test1() {
  const state = store.getState()

  function handleButtonClick(e) {
    console.log(e)
  }

  return (
    <div className={styles.container} id='component_red' style={{backgroundColor: `${state.color}`}}>
      <h1>red</h1>
      <input type="button" value="fire" onClick={handleButtonClick} />
    </div>
  );
}

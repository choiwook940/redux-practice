import produce from "immer";
import {
  INCREASE_REQUEST_ACTION,
  INCREASE_FAILURE_ACTION,
  INCREASE_SUCCESS_ACTION,
} from "./actionType";

// reducer의 초기 상태
// const initialState = {
//   increaseLoading: false,
//   inreaseSuccess: true,
//   inreaseError: null,
//   count: 0,
// };

const courses = (state, action) => {
  if(state === undefined) {
    return {
      selected_id: null,
      contents: [
        {id:1, title:'HTML', desc:'HTML is...'},
        {id:2, title:'CSS', desc:'CSS is...'},
        {id:3, title:'Javascript', desc:'Javascript is...'},
        {id:4, title:'React', desc:'React is...'}
      ]
    }
  }
  let newState;
  
  if(action.type === 'SELECT') {
    newState = Object.assign({}, state, {selected_id:action.id})
  }
  // console.log(action, state, newState)

}

export default courses;

import { ClIENT_DATA } from "../actions/registerClient";
import { REMOVE_CLIENT } from "../actions/removeClient";

const INITIAL_STATE = { clients: [] };
  
  function myReducer1(state = INITIAL_STATE, action) {
    console.log('ver se vai');
    switch (action.type) {
      case ClIENT_DATA:
        return {
          clients: [...state.clients, { name: action.name, age: action.age, email: action.email } ]
         };
      case REMOVE_CLIENT:
        console.log(action.array);
        return {
          clients: action.array
         };
      default:
        return state;
    }
  }
  
  export default myReducer1;
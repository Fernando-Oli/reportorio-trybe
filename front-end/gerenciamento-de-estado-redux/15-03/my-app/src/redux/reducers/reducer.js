import { FORMS_DATA } from '../actions/loginChange';

const INITIAL_STATE = {
    password: '',
    email: '',
  };
  
  function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case FORMS_DATA:
        return { ...state,
          password: action.password,
          email: action.email,
         };
      default:
        return state;
    }
  }
  
  export default myReducer;
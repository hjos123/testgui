import { ALERT_MESSAGE } from '../../types';

export default (state, action) => {
  switch(action.type){
    case ALERT_MESSAGE:
      return {
        ...state,
        alert: action.payload
      }
    default:
      return state;
  }
}

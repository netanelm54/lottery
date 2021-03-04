import { combineReducers } from "redux";

const initialState = [];

export const lottery = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOTTERY_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  lottery,
});

export default reducer;

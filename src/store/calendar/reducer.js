import { ACTION_SELECT_DAY } from "../../constants";

const initialState = {
  selectedDate: undefined
};

export const selectDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SELECT_DAY:
      return {
        ...state,
        selectedDate: action.payload
      };
    default:
      return state;
  }
};

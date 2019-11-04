import { ACTION_SELECT_DAY } from "../../constants";

export const selectDay = props => {
  return {
    type: ACTION_SELECT_DAY,
    payload: props
  };
};

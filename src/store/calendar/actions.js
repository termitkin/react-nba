import { ACTION_SELECT_DAY } from "../../constants";

export const setSelectedDay = props => {
  return {
    type: ACTION_SELECT_DAY,
    payload: props
  };
};

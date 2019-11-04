import { combineReducers } from "redux";
import { addTeamData } from "./team/reducer";
import { selectDayReducer } from "./calendar/reducer";

export default combineReducers({
  addTeamData,
  selectDayReducer
});

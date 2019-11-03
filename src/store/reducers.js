import { combineReducers } from "redux";
import { teamData, teamHasErrored, teamIsLoading } from "./team/reducer";

export default combineReducers({
  teamData,
  teamHasErrored,
  teamIsLoading
});

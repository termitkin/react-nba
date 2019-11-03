import { ACTION_ADD_TEAM_DATA } from "../../constants";

export const addTeamData = props => {
  return {
    type: ACTION_ADD_TEAM_DATA,
    payload: props
  };
};

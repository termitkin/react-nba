import { ACTION_ADD_TEAM_DATA } from "../../constants";

const initialState = {
  teamData: {}
};

export const addTeamData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_TEAM_DATA:
      return {
        ...state,
        teamData: action.payload
      };
    default:
      return state;
  }
};

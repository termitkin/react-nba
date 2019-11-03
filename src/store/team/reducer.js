import { ACTION_TEAM_IS_LOADING } from "../../constants";
import { ACTION_TEAM_HAS_ERRORED } from "../../constants";
import { ACTION_TEAM_FETCH_SECCESS } from "../../constants";

const initialState = {
  team: {}
};

export const teamHasErrored = (state = false, action) => {
  switch (action.type) {
    case ACTION_TEAM_HAS_ERRORED:
      return action.teamHasErrored;

    default:
      return state;
  }
};

export const teamIsLoading = (state = false, action) => {
  switch (action.type) {
    case ACTION_TEAM_IS_LOADING:
      return action.teamIsLoading;

    default:
      return state;
  }
};

export const teamData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TEAM_FETCH_SECCESS:
      return action.team;

    default:
      return state;
  }
};

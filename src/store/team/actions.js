import { ACTION_ADD_TEAM_DATA } from "../../constants";

export const addTeamData = props => {
  return {
    type: ACTION_ADD_TEAM_DATA,
    payload: props
  };
};

// import { ACTION_TEAM_IS_LOADING } from "../../constants";
// import { ACTION_TEAM_HAS_ERRORED } from "../../constants";
// import { ACTION_TEAM_FETCH_SECCESS } from "../../constants";
// import axios from "axios";

// export const teamHasErrored = bool => {
//   return {
//     type: ACTION_TEAM_HAS_ERRORED,
//     teamHasErrored: bool
//   };
// };

// export const teamIsLoading = bool => {
//   return {
//     type: ACTION_TEAM_IS_LOADING,
//     teamIsLoading: bool
//   };
// };

// export const itemsFetchDataSuccess = fetchedData => {
//   return {
//     type: ACTION_TEAM_FETCH_SECCESS,
//     team: fetchedData
//   };
// };

// export const fetchTeamData = teamId => {
//   return dispatch => {
//     dispatch(teamIsLoading(true));

//     axios
//       .get(`https://www.balldontlie.io/api/v1/teams/${teamId}`)
//       .then(data => {
//         dispatch(itemsFetchDataSuccess({ ...data.data }));
//         dispatch(teamIsLoading(false));
//       })
//       .catch(() => dispatch(teamHasErrored(true)));
//   };
// };

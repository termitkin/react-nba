import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { HashRouter as Router, Route } from "react-router-dom";
// import PropTypes from "prop-types";
import IndexPage from "./pages/IndexPage";
import TeamPage from "./pages/TeamPage";
import AllTeams from "./pages/AllTeams";

const store = configureStore();

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route
          path="/"
          exact
          render={props => <IndexPage params={{ ...props }} />}
        />
        <Route
          path="/team=:id"
          render={props => <TeamPage params={{ ...props }} />}
        />
        <Route
          path="/allteams"
          render={props => <AllTeams params={{ ...props }} />}
        />
      </Router>
    </Provider>
  );
};

// AppRouter.propTypes = {
//   store: PropTypes.object.isRequired
// };

export default AppRouter;

import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import TeamPage from "./pages/TeamPage";
import AllTeams from "./pages/AllTeams";
import Page404 from "./pages/Page404";

const store = configureStore();

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path={["/", "/date=:date"]}
            exact
            render={props => <IndexPage params={{ ...props }} />}
          />
          <Route
            path="/team=:id"
            render={props => <TeamPage params={{ ...props }} />}
          />
          <Route
            path="/all-teams"
            render={props => <AllTeams params={{ ...props }} />}
          />
          <Route path="*" render={() => <Page404 />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default AppRouter;

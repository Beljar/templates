import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import appStyles from "./AppStyles";

const App = () => {
  const useStyles = appStyles();
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
            <Route path="/">
              <main className={useStyles.mainContent}>
               App running
              </main>
            </Route>
          </Switch>
      </HashRouter>
    </React.Fragment >
  );
};

export default App;

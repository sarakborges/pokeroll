import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Rolls from "./containers/Rolls";
import Faq from "./containers/Faq";
import RollForm from "./containers/RollForm";
import Sheet from "./containers/Sheet";
import Places from "./containers/Places";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/rolls/getAll/:page" exact={true} component={Rolls} />
        <Route path="/rolls/create" exact={true} component={RollForm} />
        <Route path="/rolls/faq" exact={true} component={Faq} />
        <Route path="/rolls/places" exact={true} component={Places} />
        <Route path="/sheet" exact={true} component={Sheet} />
        <Route path="*" component={Rolls} />
      </Switch>
    </Router>
  );
};

export default Routes;

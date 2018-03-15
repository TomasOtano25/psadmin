import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/homePage";
import AboutPage from "./components/about/aboutPage";
import AuthorPage from "./components/authors/authorPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route name="about" path="/about" component={AboutPage} />
      <Route path="/authors" component={AuthorPage} />
      {/*<Route path="/authors/:id" component={AuthorPage} />*/}
    </Switch>
  );
};

export default Routes;

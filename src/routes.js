import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/homePage";
import AboutPage from "./components/about/aboutPage";
import AuthorPage from "./components/authors/authorPage";
import NotFoundPage from "./components/notFoundPage";
import ManageAuthorsPage from "./components/authors/manageAuthorPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/authors" component={AuthorPage} />
      <Route path="/author/:id" component={ManageAuthorsPage} />
      <Route path="/author" component={ManageAuthorsPage} />
      <Redirect from="/about-us" to="/about" />
      <Redirect from="/awthurs" to="/authors" />
      <Redirect from="/about/*" to="/about" />
      <Route component={NotFoundPage} />
      {/*<Route path="/authors/:id" component={AuthorPage} />*/}
    </Switch>
  );
};

export default Routes;

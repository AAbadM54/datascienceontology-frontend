import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Alert, PageHeader } from "react-bootstrap";

import { ConceptPage } from "./pages/concept";
import { HomePage } from "./pages/home";
import { SearchPage } from "./pages/search";

import "../style/main.css";


const App = () =>
  <div id="app">
    <PageHeader>Data Science Ontology</PageHeader>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/concept/:id" component={ConceptPage} />
      <Route path="/search/:query" component={SearchPage} />
      <Route component={Error404Page} />
    </Switch>
  </div>;

const Error404Page = () =>
  <Alert bsStyle="danger">
    <h4>Whoops</h4>
    <p>The page you are looking for does not exist.</p>
  </Alert>;


ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("react-container")
);

import React from 'react';
import ShoeFitPage from './ShoeFitPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <ShoeFitPage />
          </Route>
        </Switch>
    </Router>
  );
}

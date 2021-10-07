import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import ManageCenter from "./Admin/ManageCenter/ManageCenter";
import inscriptionCenter from "./inscriptionCenter/inscriptionCenter";
import inscriptionPharmacie from "./inscriptionPharmacie/inscriptionPharmacie";
import updateInscri from "./updateInscri/updateInscri";
import reportRdv from "./reportRdv/reportRdv";

export let history = createBrowserHistory({ basename: "" });
class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <Route path="/Home" component={Home}></Route>
          <Route path="/ManageCenter" component={ManageCenter}></Route>
          <Route
            path="/inscriptionCenter"
            component={inscriptionCenter}
          ></Route>

          <Route
            path="/inscriptionPharmacie"
            component={inscriptionPharmacie}
          ></Route>

          <Route path="/updateInscri" component={updateInscri}></Route>
          <Route path="/reportRdv" component={reportRdv}></Route>
          <Route
            path="/inscriptionPharmacie"
            component={inscriptionPharmacie}
          ></Route>

          <Route path="/Admin" component={Admin}></Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;

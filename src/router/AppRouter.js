import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Reports from "../components/admin/reports";
import Login from "../components/login/login";
import Qualify from "../components/qualifyTeachers/qualify";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/qualify" component={Qualify} />
                <Route exact path="/reports" component={Reports} />
                <Redirect from="" to="/login" />
            </Switch>
        </Router>
    )
}
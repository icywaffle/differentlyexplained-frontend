import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Physics from "./Physics"

export default function Body() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/Physics">
                    <Physics />
                </Route>
            </Switch>
        </Router>
    )
}
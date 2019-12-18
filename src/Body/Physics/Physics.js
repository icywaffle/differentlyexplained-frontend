import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Classical from "./Classical"

function HomePage() {
    return <Home />
}

function ClassicalPage() {
    return <Classical />
}

export default function Physics() {
    return (
        <Router>
            <Route path="/Physics/" exact component={HomePage} />
            <Route path="/Physics/Classical/" component={ClassicalPage} />
        </Router>
    )
}
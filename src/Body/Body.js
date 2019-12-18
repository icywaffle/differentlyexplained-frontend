import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Physics from "./Physics"

function HomePage() {
    return <Home />
}

function PhysicsPage() {
    return <Physics />
}

export default function Body() {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/Physics" component={PhysicsPage} />
        </Router>
    )
}
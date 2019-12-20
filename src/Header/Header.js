import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"

function HomePage() {
    return <Home />
}

export default function Header() {
    return (
        <Router>
            <Route path="/" component={HomePage} />
        </Router>
    )
}
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import NoShow from "./NoShow"

function HomePage() {
    return <Home />
}

// Don't show header on specific pages.
function NoShowPage() {
    return <NoShow />
}

export default function Header() {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
            <Router path="" component={NoShowPage} />
        </Router>
    )
}
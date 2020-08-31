import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Index } from 'pages'
import './App.css'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Index/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
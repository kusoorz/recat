import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Index } from 'pages'
import Action from 'components/action'
import store from 'store'
import './App.css'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Action></Action>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Index/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App
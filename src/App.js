import React from 'react'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from 'components/loading'
import Action from 'components/action'
import routes from 'pages'
import store from 'store'
import './App.css'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Action></Action>
                <Router>
                    <Switch>
                        <Suspense fallback={<Loading show={true} />}>
                            {routes.map((props) => <Route {...props} key={props.name} />)}
                        </Suspense>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default App
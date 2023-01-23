import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Signup from './components/Signup'
import Signin from './components/Signin'


const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default function App({history, onSignIn}) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <Signin onSignIn={onSignIn}/>
                        </Route>
                        <Route path="/auth/signup">
                            <Signup onSignIn={onSignIn}/>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
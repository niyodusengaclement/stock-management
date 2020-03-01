import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';

function App() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App;

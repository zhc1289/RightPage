import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import ForSale from './ForSale'
import BuyList from './BuyList'
import NoMatch from './NoMatch'

export const App = () =>{
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/">
          <Redirect to="/Home"/>
        </Route>
        <Route exact path="/ForSale" component={ForSale}/>
        <Route exact path="/BuyList" component={BuyList}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  )
}

export default App

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Error404 } from './views'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

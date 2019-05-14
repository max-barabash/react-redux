import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import NotFound from './components/NotFound'
import TweetPage from './containers/TweetPage';
import ProfilePage from './containers/ProfilePage';

function App() {
  return (
        <BrowserRouter>
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/tweets" component={TweetPage} />
                <Route component={NotFound} />
              </Switch>
        </BrowserRouter>
  )
}

export default App;

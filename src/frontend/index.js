import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './event-list';
import { Fallback } from './fallback';
import { Home } from './home';
import LoginForm from './login';

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/events" component={Events} />
        <Route component={Fallback} />
      </Switch>
    </Router>
  );
}

export default RouterComponent;

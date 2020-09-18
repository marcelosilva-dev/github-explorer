import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Charts from '../pages/Charts';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
    <Route path="/charts" component={Charts} />
  </Switch>
);

export default Routes;

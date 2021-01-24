import React from 'react';

import { Route } from 'react-router-dom';
import { HomePage, TablePage } from './pages';
import SwipeableRoutes from 'react-swipeable-routes';

function App() {
  return (
    <SwipeableRoutes replace>
      <Route exact path="/" component={HomePage} />
      <Route path="/table" component={TablePage} />
    </SwipeableRoutes>
  );
}

export default App;

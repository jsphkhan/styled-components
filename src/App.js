import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Page1 = React.lazy(() => import(/* webpackChunkName: "page1" */ 'pages/Page1'));
const Page2 = React.lazy(() => import(/* webpackChunkName: "page2" */ 'pages/Page2'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

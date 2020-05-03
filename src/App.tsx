import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/Environment';
import Products from './features/Products';
import Authors from './features/Authors';

let AppQuery = graphql`
  query AppQuery {
    users {
      id
      firstName
      lastName
      userName
    }
    products {
      id
      name
      description
      price
      stockQtt
    }
  }
`;

let preloadedQuery = preloadQuery(RelayEnvironment, AppQuery, {});

function App(props: any) {
  let appData: any = usePreloadedQuery(AppQuery, props.preloadedQuery);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/products">
            <Products products={appData.products} />
          </Route>
          <Route path="/authors">
            <Authors authors={appData.users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;

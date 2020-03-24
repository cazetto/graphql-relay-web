import React, { Suspense } from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const UsersQuery = graphql`
  query AppQuery {
    users {
      name
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, UsersQuery, {});

function App(props: any) {
  console.log(props);

  const data: any = usePreloadedQuery(UsersQuery, props.preloadedQuery);
  console.log(data);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
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

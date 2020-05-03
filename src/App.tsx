import React, { Suspense } from 'react';
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
    <>
      <h1>Products</h1>
      <Products products={appData.products} />
      <h1>Authors</h1>
      <Authors authors={appData.users} />
    </>
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

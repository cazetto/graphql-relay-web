import React, { FC } from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Author } from './typing';
import List from './components/List';

import RelayEnvironment from '../../relay/Environment';

const AuthorsQuery = graphql`
  query AuthorsQuery {
    users {
      id
      firstName
      lastName
      userName
    }
  }
`;

const Authors: FC<{}> = () => {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={AuthorsQuery}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <List items={(props as { users: Author[] }).users} />;
        }
        return <div>Loading</div>;
      }}
    ></QueryRenderer>
  );
};

export default Authors;

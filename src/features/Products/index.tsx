import React, { FC } from 'react';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { Product } from './typing';
import List from './components/List';
import RelayEnvironment from '../../relay/Environment';

const ProductsQuery = graphql`
  query ProductsQuery {
    products {
      id
      name
    }
  }
`;

const Products: FC<{}> = () => {
  return (
    <QueryRenderer
      environment={RelayEnvironment}
      query={ProductsQuery}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <div>
              <h1>Product List</h1>
              <List items={(props as { products: Product[] }).products} />
            </div>
          );
        }
        return <div>Loading</div>;
      }}
    ></QueryRenderer>
  );
};

export default Products;

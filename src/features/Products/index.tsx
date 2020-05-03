import React, { FC } from 'react';
import { Product } from './typing';
import List from './components/List';

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  return <List items={products} />;
};

export default Products;

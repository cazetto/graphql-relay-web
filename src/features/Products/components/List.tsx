import React, { FC } from 'react';
import { Product } from '../typing';

interface ListProps {
  items: Product[];
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

interface ListItemProps {
  product: Product;
}

const ListItem: FC<ListItemProps> = ({ product }) => {
  return (
    <li>
      <p>Product: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>Quantity in stock: {product.stockQtt}</p>
    </li>
  );
};

export default List;

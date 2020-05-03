import React, { FC } from 'react';
import { Author } from '../typing';

interface ListProps {
  items: Author[];
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} author={item} />
      ))}
    </ul>
  );
};

interface ListItemProps {
  author: Author;
}

const ListItem: FC<ListItemProps> = ({ author }) => {
  return (
    <li>
      <p>{`Author: ${author.firstName} ${author.lastName}`}</p>
    </li>
  );
};

export default List;

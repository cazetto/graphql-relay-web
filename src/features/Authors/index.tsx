import React, { FC } from 'react';
import { Author } from './typing';
import List from './components/List';

interface AuthorsProps {
  authors: Author[];
}

const Authors: FC<AuthorsProps> = ({ authors }) => {
  return <List items={authors} />;
};

export default Authors;

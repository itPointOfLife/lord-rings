import React from 'react';

import { Title } from './Title';
import { Data } from './Data';
import { AddButtons } from './AddButtons';

const races = ['Hobbit', 'Human', 'Dworf', 'Elf'];

export const Table = () => {
  return (
    <div className="table">
      <Title races={races} />
      <Data races={races} />
      <AddButtons races={races} />
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';

import { addName } from '../redux/actions/tableData';

let addInputValue = '';

export const AddButtons = ({ races }) => {
  const dispatch = useDispatch();

  function handleAddFormSubmit(e) {
    e.preventDefault();
    dispatch(addName(addInputValue, this.race));
    e.target.reset();
  }

  function changeAddIptutHandler(e) {
    addInputValue = e.target.value;
  }

  return (
    <div className="add-buttons">
      {races.map((race) => (
        <form key={race + '-form'} onSubmit={handleAddFormSubmit.bind({ race })} className="btn">
          <input onChange={changeAddIptutHandler} />
          <button type="submit">Add</button>
        </form>
      ))}
    </div>
  );
};

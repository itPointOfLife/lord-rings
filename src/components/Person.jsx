import React from 'react';
import { useDispatch } from 'react-redux';

import { changeName, deleteName } from '../redux/actions/tableData';

export const Person = ({ id, name, isBorderNone }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');

  function changeNameHandler(e) {
    console.log(e);
    const currentNameInput = e.target.parentNode.parentNode.children[1].children[0];
    const acceptChangesNode = e.target.parentNode.parentNode.children[1].children[1];
    currentNameInput.disabled = false;
    currentNameInput.focus();
    acceptChangesNode.classList.remove('d-n');
  }

  function deleteNameHandler() {
    dispatch(deleteName(this.id));
  }

  function changeInputHandler(e) {
    setInputValue(e.target.value);
  }

  function changeAcceptHandler(e) {
    if (inputValue) {
      dispatch(changeName(this.id, inputValue));
      setInputValue('');
    }
    const currentNameInput = e.target.parentNode.parentNode.children[1].children[0];
    e.target.classList.add('d-n');
    currentNameInput.disabled = true;
  }

  return (
    <div className={'person' + (isBorderNone ? ' b-n' : '')}>
      <div className="control-buttons">
        <span className="change" onClick={changeNameHandler.bind({ id, value: 'test' })}>
          ✏
        </span>
        <span className="delete" onClick={deleteNameHandler.bind({ id })}>
          ❌
        </span>
      </div>
      <div className="input-form">
        <input value={inputValue ? inputValue : name} onChange={changeInputHandler} disabled />
        <span className="change-accept d-n" onClick={changeAcceptHandler.bind({ id: id })}>
          ✔️
        </span>
      </div>
    </div>
  );
};

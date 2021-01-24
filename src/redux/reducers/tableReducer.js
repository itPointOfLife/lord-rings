import produce from 'immer';
import { SET_DATA, CHANGE_NAME, DELETE_NAME, ADD_NAME } from '../actions/types';

const initialState = {
  data: [],
};

export const tableReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_DATA:
      draft.data = action.payload;
      break;
    case CHANGE_NAME:
      draft.data = draft.data.map((itemObj) => {
        if (action.payload.id === itemObj.id) itemObj.name = action.payload.value;
        return itemObj;
      });
      break;
    case DELETE_NAME:
      draft.data = draft.data.filter((itemObj) => action.payload !== itemObj.id);
      break;
    case ADD_NAME:
      draft.data.push({
        id: Date.now(),
        name: action.payload.name,
        race: action.payload.race,
      });
      break;
    default:
  }
}, initialState);

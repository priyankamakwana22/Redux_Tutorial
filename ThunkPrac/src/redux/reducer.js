import {ADD_PLACE} from './action';

const initialState = {
  placeName: '',
  places: [],
};

export const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: state.places.length + 1,
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};

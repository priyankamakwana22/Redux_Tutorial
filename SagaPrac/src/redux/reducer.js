import {ADD_PLACE, ADD_PLACE_SAGE, ADD_PLACE_SAGA} from './action';

const initialState = {
  placeName: '',
  places: [],
};

const placeReducer = (state = initialState, action) => {
  console.log('🚀 ~ placeReducer ~ state:', state);
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: state.places.length,
            value: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default placeReducer;

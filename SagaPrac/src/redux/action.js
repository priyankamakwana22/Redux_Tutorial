export const ADD_PLACE = 'ADD_PLACE';
export const ADD_PLACE_SAGE = 'ADD_PLACE_SAGE';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName,
  };
};

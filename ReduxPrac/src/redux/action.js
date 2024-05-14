export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = placeName => ({
  type: ADD_PLACE,
  payload: placeName,
});

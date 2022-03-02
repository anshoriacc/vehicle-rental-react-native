const initialState = {
  vehicle_id: null,
  quantity: null,
  start_date: null,
  return_date: null,
  payment: 'Transfer',
};

const reservationReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case `RESERVATION_BODY`:
      return {
        ...prevState,
        vehicle_id: action.payload.id,
        quantity: action.payload.quantity,
        start_date: action.payload.startDate,
        return_date: action.payload.returnDate,
      };
    case `RESERVATION_RESET`:
      return {
        ...initialState,
      };
    default:
      return prevState;
  }
};

export default reservationReducer;

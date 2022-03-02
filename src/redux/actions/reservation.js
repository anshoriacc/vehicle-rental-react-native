export const reservationBody = body => {
  return {
    type: 'RESERVATION_BODY',
    payload: body,
  };
};

export const reservationReset = () => {
  return {
    type: 'RESERVATION_RESET',
  };
};

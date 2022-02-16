const initialState = '';

const changeResult = (state = initialState, action) => {
  switch (action.type) {
    case 'CONVERT_TO_DECIMAL':
      return '123456789';
    case 'CONVERT_TO_ROMAN':
      return '12345';
    default:
      return state;
  }
};

export default changeResult;

const initialState = {
  pokes: [],
  filter: '',
};

export default function pokesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        pending: false,
        pokes: action.payload,
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}

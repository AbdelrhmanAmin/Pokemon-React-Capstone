const initialState = {
  pokes: [],
  filter: '',
  loading: true,
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
    case 'LOADING':
      return {
        ...state,
        loading: action.state,
      };
    default:
      return state;
  }
}


const initialState = {
  pending: false,
  pokes: [],
  filter: ''
}

export function pokesReducer(state = initialState, action) {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        pending: true
      }
    case 'SUCCESS':
      return {
        ...state,
        pending: false,
        pokes: action.payload
      }
    case 'FILTER':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
}

// export const getPokes = state => state.pokes;
// export const getPokesPending = state => state.pending;
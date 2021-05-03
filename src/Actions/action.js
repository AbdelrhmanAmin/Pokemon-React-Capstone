export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';

export const pokePending = () => {
  return {
    type: 'PENDING',
  }
}
export const pokeSuccess = (pokes) => {
  return {
    type: 'SUCCESS',
    payload: pokes
  }
}

export const pokeFilter = (filter) => {
  return {
    type: "FILTER",
    filter
  }
}

export const fetchPokes = () => {
  return (dispatch) => {
    const arr = [];
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(res => res.json())
      .then(allpokes => allpokes.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then(res => {
            arr.push(res)
            dispatch(pokePending())
            if (arr.length === 50) {
              dispatch(pokeSuccess(arr))
            }
          })
      }))
  }
}
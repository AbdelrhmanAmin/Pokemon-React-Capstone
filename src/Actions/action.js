export const SUCCESS = 'SUCCESS';

export const pokeSuccess = (pokes) => ({
  type: 'SUCCESS',
  payload: pokes,
});

export const pokeFilter = (filter) => ({
  type: 'FILTER',
  filter,
});

export const fetchPokes = () => (dispatch) => {
  const arr = [];
  fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then((res) => res.json())
    .then((allpokes) => allpokes.results.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((res) => {
          arr.push(res);
          if (arr.length === 25) {
            dispatch(pokeSuccess(arr));
          }
        });
    }));
};

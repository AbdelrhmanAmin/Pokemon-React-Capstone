// import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Main from './Main';
import Filter from './Filter';
function App() {

  return (
    <div className="App">
      POKEMON
      <Filter />
      <Main />
    </div>
  );
}
// const mapStateToProps = state => {
//   return {
//     pokes: state.pokesReducer.pokes,
//     pending: state.pokesReducer.pending
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPokes: () => dispatch(fetchPokes())
//   }
// }
export default App;

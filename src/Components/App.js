import Main from './Main';
import Preview from './Preview';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
    <div className="App">
      POKEMON
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/:id' children={<Preview />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;

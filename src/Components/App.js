import Main from './Main';
import Preview from './Preview';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../style.css';
function App() {

  return (
    <div className="App">
      <strong className='App-strong'>Gotta Catch Em All!</strong>
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

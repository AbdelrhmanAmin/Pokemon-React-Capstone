import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './Main';
import Preview from './Preview';
import '../style.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:id">
            <Preview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

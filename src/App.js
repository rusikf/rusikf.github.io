import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar'
import About from './About'
import Portfolio from './Portfolio'
import Summary from './Summary'
import Contacts from './Contacts'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            
            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/summary">
              <Summary />
            </Route>

            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

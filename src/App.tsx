import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar'
import About from './About'
import Portfolio from './Portfolio'
import Contacts from './Contacts'

import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<About />}>
            </Route>

            <Route path="/portfolio" element={<Portfolio />}>
            </Route>

            <Route path="/experience" element={<Experience />}>
            </Route>

            <Route path="/contacts" element={<Contacts />}>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

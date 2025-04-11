import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarComponent } from './Navbar';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Experience } from './Experience';
import { Contacts } from './Contacts';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-['Source_Sans_Pro'] antialiased m-0">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

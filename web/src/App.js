import React,{useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Games from './Games';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// Main App component
function App() {
  const gamesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a ref
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  return (
    <Router>
      <div>
        <nav>
          <h1>PEASY</h1>
          <button onClick={() => scrollToRef(gamesRef)}>Games</button>
          <button onClick={() => scrollToRef(aboutRef)}>About</button>
          <button onClick={() => scrollToRef(contactRef)}>Contact</button>
          <Link to="/games">Careers</Link>
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/games" element={<Games />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/"
            element={/* Sections with refs */
            <div>
            <div ref={gamesRef}>
              <Games/>
            </div>
            <div ref={aboutRef}>
              <About/>
            </div>
            <div ref={contactRef}>
              <Contact/>
            </div>
              
            </div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

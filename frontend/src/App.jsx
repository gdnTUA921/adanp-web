import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Board from './pages/Board';
import Certification from './pages/Certification';
import Membership from './pages/Membership';
import Education from './pages/Education';
import Policy from './pages/Policy';
import News from './pages/News';
import Gallery from './pages/Gallery';
import WorkWithUs from './pages/WorkWithUs';
import Contact from './pages/Contact';
import Login from './pages/Login';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="app">
      {!isLoginPage && <a href="#main-content" className="skip-link">Skip to main content</a>}
      {!isLoginPage && <Navbar />}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/education" element={<Education />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

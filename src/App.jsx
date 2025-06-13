import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Testseries from '../src/components/Testseries'
import ResultsPage from './components/Results';
import More from './components/More';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/testseries" element={<Testseries />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/more" element={<More />} />

    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import ResultsSection from './components/ResultsSection';
import CoursePicker from './components/CoursePicker';
import StudentSuccess from './components/StudentSuccess';
import AppAdvantage from './components/AppAdvantages';
import CallbackForm from './components/Form';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <>
    <Navbar />
    <ResultsSection />
    <CoursePicker />
    <StudentSuccess />
    <AppAdvantage />
    <Testimonials />
    <CallbackForm />
    <Footer />
    </>
  );
}

export default App;

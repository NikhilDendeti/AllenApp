import './App.css';
import Navbar from './components/Navbar';
import ResultsSection from './components/ResultsSection';
import CoursePicker from './components/CoursePicker';
import StudentSuccess from './components/StudentSuccess';
import AppAdvantage from './components/AppAdvantages';
import CallbackForm from './components/Form';

function App() {
  return (
    <>
    <Navbar />
    <ResultsSection />
    <CoursePicker />
    <StudentSuccess />
    <AppAdvantage />
    <CallbackForm />
    </>
  );
}

export default App;

import ResultsSection from "../components/ResultsSection"
import CoursePicker from '../components/CoursePicker';
import StudentSuccess from '../components/StudentSuccess';
import AppAdvantage from '../components/AppAdvantages';
import CallbackForm from '../components/Form';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <ResultsSection />
      <CoursePicker />
      <StudentSuccess />
      <AppAdvantage />
      <Testimonials />
      <CallbackForm />
    </>
  );
}

export default Home;
import Hero from './Components/Hero/Hero';
import './App.css';
import Program from './Components/Program/Program';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';
import Testimonial from './assets/Testimonials/Testimonial';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;

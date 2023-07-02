import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="overflow-hidden bg-[#f4eedb] flex flex-col justify-start gap-1 w-full pt-10 ">
      <Hero />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;

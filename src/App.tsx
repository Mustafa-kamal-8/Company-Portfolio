import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-gray-900 bg-gray-100 overflow-x-hidden"
    >
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Counter/>
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;

import { motion } from 'framer-motion';
import Picture from '../../public/rishi--fiCYNV51m4-unsplash.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to Our Company
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Innovating for a better tomorrow
        </motion.p>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Learn More
        </motion.button> */}
      </div>
    </section>
  );
};

export default Home;

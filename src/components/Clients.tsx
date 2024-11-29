import { motion } from 'framer-motion';
import picture1 from '../../public/1534850446images.jpg';
import picture2 from '../../public/images (1).png';
import picture3 from '../../public/Tezpur_University_logo.png';
import picture4 from '../../public/2191.jpg';

const Clients = () => {
  const clients = [
    { name: 'Client 1', logo: picture1, description: 'A leading technology company' },
    { name: 'Client 2', logo: picture2, description: 'An innovative startup' },
    { name: 'Client 3', logo: picture3, description: 'A global corporation' },
    { name: 'Client 4', logo: picture4, description: 'A cutting-edge research firm' },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Clients
        </motion.h2>
        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <motion.div
            className="flex space-x-12"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            {/* Duplicated logos for seamless infinite scroll */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

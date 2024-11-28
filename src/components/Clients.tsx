import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: 'Client 1', logo: '/client1-logo.png', description: 'A leading technology company' },
    { name: 'Client 2', logo: '/client2-logo.png', description: 'An innovative startup' },
    { name: 'Client 3', logo: '/client3-logo.png', description: 'A global corporation' },
    { name: 'Client 4', logo: '/client4-logo.png', description: 'A cutting-edge research firm' },
  ];

  return (
    <section id="clients" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Clients
        </motion.h2>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
          className="flex space-x-12 overflow-hidden"
        >
          {clients.concat(clients).map((client, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <img src={client.logo} alt={client.name} className="w-full h-32 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;


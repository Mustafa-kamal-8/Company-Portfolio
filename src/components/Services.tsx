import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'We create responsive and user-friendly websites.' },
    { title: 'Mobile App Development', description: 'We build innovative mobile applications for iOS and Android.' },
    { title: 'Cloud Solutions', description: 'We provide scalable and secure cloud infrastructure solutions.' },
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


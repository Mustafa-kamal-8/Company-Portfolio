import { motion } from 'framer-motion';

const About = () => {
  const features = [
    { title: 'Integrity', description: 'We uphold the highest ethical standards in all our dealings.' },
    { title: 'Speed', description: 'We deliver results quickly without compromising on quality.' },
    { title: 'Quality', description: 'We are committed to excellence in everything we do.' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


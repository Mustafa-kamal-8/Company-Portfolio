import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Picture from '../../public/oli-G1XGl0lPOak-unsplash.jpg';

const Services = () => {
  const ref = useRef(null); // Reference for the section
  const isInView = useInView(ref, { amount: 0.3 }); // Trigger when 30% of the section is in view

  const services = [
    { title: 'Native Mobile Apps', description: 'Cross-platform responsive high-performance mobile apps - Android & IOS' },
    { title: 'PWA', description: 'Cost-effective, high-performance, and the future of multi-platform development - Progressive Web Apps.' },
    { title: 'Customized Software', description: 'Websites to web apps, you dream we deliver. Delivering digital experiences to brands and companies by using the latest technology to meet client needs.' },
    { title: 'Graphics Design', description: 'Creating visual content to communicate messages across industries - from corporates to renowned book publishing houses.' },
    { title: 'Customer Satisfaction', description: 'Our reputation is based on the highest level of customer satisfaction. Maintaining integrity & sincerity we deliver in a minimalist time frame and in the most cost-effective process.' },
    { title: 'Local Commerce', description: 'An e-commerce platform for local businesses with a special thrust for remote and rural areas. An initiative to bridge the gap between remote places and top-tier e-commerce platforms.' },
  ];

  return (
    <section
      id="services"
      ref={ref} // Attach the reference to the section
      className="py-20 text-white"
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: -50, opacity: 0 }} // Hidden initially
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Trigger animation when in view
          transition={{ duration: 0.9 }} // Fast animation
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }} // Hidden initially
              animate={isInView ? { y: 0, opacity: 1 } : {}} // Trigger animation when in view
              transition={{ duration: 0.9, delay: index * 0.3 }} // Add a small delay for staggered effect
              className="bg-gray-600 bg-opacity-75 p-6 rounded-lg shadow-lg"
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

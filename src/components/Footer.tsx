import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-6 md:mb-0"
          >
            <img src="/logo.png" alt="Company Logo" className="h-12 w-auto" />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-1/3 mb-6 md:mb-0"
          >
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


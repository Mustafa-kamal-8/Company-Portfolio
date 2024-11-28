import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../../public/images.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Clients', to: 'clients' },
    { name: 'Team', to: 'team' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white text-black z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logo} alt="Company Logo" className="h-16 w-30" />
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black"
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-sm hover:bg-red-600 transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;


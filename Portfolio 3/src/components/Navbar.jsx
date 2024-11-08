import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'About', id: 'about' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary bg-opacity-90 backdrop-blur-sm"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Portfolio &nbsp;
            <span className="hidden sm:block">| Developer</span>
          </p>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              whileHover={{ scale: 1.1 }}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
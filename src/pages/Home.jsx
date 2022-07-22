import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <Popular />
        <Veggie />
    </motion.section>
  );
};

export default Home;

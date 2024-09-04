import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/TopCard.module.css';

import TextRotate from './TextRotate';

import { fadeInDown } from '../utils/motions';

const TopCard = ({ center }) => {
  return (
    <motion.div
      className={`${styles.top_card} ${center ? styles.center : ''}`}
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{paddingBottom: "200px"}}
    >
      <h1>Zhang TianHao</h1>
      <TextRotate />
      
    </motion.div>
  );
};

export default TopCard;

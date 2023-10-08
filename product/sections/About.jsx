'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About STELLAR " textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1.1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Join us</span> {' '} in exploring the wonders of the universe and forging new friendships along the way. Together, we'll embark on an incredible journey through the cosmos, unraveling the secrets of distant galaxies and discovering the beauty of our own night sky.

Are you ready to reach for the stars? Join STELLAR CLUB today and embark on a cosmic adventure like no other.{' '}
        <span className="font-extrabold text-white">
        Together, we'll embark on an incredible journey through the cosmos, unraveling the secrets of distant galaxies and discovering the beauty of our own night sky.
        </span>{' '}
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1.1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="section min-h-screen flex items-center pt-28">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Фуллстек <span className="text-accent">React</span> Разработчик
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Создаю современные веб и мобильные приложения с отзывчивым дизайном и высокой производительностью
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary shadow-accent"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(237, 100, 166, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Посмотреть работы
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="btn btn-outline border-accent text-accent hover:shadow-accent"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(237, 100, 166, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться со мной
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Skills data
const skills = [
  { name: 'React / React Native', level: 92 },
  { name: 'TypeScript / JavaScript', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'UI/UX Дизайн', level: 78 },
  { name: 'MongoDB / PostgreSQL', level: 75 },
  { name: 'Redux / Context API', level: 88 },
  { name: 'Firebase / AWS', level: 70 },
];

const Skills = () => {
  return (
    <div className="section bg-primary bg-opacity-60 backdrop-blur-sm rounded-xl py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Навыки и Опыт</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Технологии и инструменты, с которыми я работаю и в которых имею профессиональные навыки
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <span className="text-accent font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <motion.div 
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    boxShadow: '0 0 10px rgba(237, 100, 166, 0.5)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Другие Технологии, с Которыми Я Работаю</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'Webpack', 'Sass/SCSS', 'WebRTC', 'Stripe API', 'Jest', 'RESTful API', 'Docker', 'Git/GitHub', 'CI/CD', 'Figma', 'Responsive Design'].map((tech) => (
              <motion.span
                key={tech}
                className="bg-gray-800 bg-opacity-70 border border-gray-700 px-4 py-2 rounded-full text-gray-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#ed64a6', 
                  color: '#ffffff',
                  boxShadow: '0 0 15px rgba(237, 100, 166, 0.5)',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 
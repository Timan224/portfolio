'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Избранные Проекты</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Подборка моих недавних работ, демонстрирующих мои навыки и опыт
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card group"
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(237, 100, 166, 0.3)'
            }}
          >
            <div className="relative h-64 overflow-hidden border-b border-gray-700">
              <Image 
                src={project.image} 
                alt={project.title} 
                className="transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={index < 2}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`}>
                <motion.span
                  className="inline-block text-accent font-medium hover:underline cursor-pointer"
                  whileHover={{ x: 5, textShadow: '0 0 8px rgba(237, 100, 166, 0.5)' }}
                >
                  Смотреть проект →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

// Удаляем определение типа ProjectParams

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Исправляем сигнатуру функции, используя встроенное определение типов
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-16">
      <div className="container mx-auto px-4 pt-24">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-accent hover:text-pink-400 mb-8 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Назад к проектам
        </Link>

        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
          <div className="relative h-80 md:h-96 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="opacity-90"
            />
          </div>
          
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">О проекте</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">{project.fullDescription}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Функциональность</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Технический стек</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Проблемы и решения</h2>
              <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Результаты</h2>
              <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Посмотреть демо
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Исходный код
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
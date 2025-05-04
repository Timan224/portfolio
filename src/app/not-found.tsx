import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
      <h2 className="text-2xl font-medium mb-8 text-white">Страница не найдена</h2>
      <p className="text-gray-300 mb-8 max-w-md">
        Страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link 
        href="/" 
        className="btn-primary"
      >
        Вернуться на главную
      </Link>
    </div>
  );
} 
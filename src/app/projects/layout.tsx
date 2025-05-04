import React from 'react';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Проекты | Портфолио разработчика',
  description: 'Детальная информация о проектах и технологиях, использованных в их разработке.',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 
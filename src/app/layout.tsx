import '@/styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'A creative developer portfolio showcasing projects and skills',
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 
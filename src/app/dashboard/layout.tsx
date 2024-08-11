// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;

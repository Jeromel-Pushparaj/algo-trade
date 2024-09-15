import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Navbar */}
      <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            {/* Navigation Links */}
            <Link href="/">Home</Link>
            <Link href="/dashboard/users">Users</Link>
            <Link href="/logout">Logout</Link>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <main className="flex-1 bg-gray-100 p-8 mt-16">
        {/* The children passed to the layout will be rendered here */}
        {children}
      </main>
    </div>
  );
};

export default Layout;

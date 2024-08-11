// pages/users.tsx
'use client';
import React, { useState } from 'react';
import Layout from './layout';

const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const UsersPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(usersData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleEdit = (id: number) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
        className="p-2 mb-4 border border-gray-400 rounded"
      />
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Token</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">
              <button
                  onClick={() => handleDelete(user.id)}
                  className="text-green-500 mr-4"
                >
                  Check 
                </button>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default UsersPage;

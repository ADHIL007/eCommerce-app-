import React, { useState, useEffect } from 'react';
import './Users.css';

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
  }

function Users() {
    const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userResponse = await fetch('https://api.escuelajs.co/api/v1/users');
        const userData = await userResponse.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h1>User List</h1>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

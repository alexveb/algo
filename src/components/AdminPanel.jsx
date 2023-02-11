import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setUsers(response.data);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };

    fetchUsers();
  }, []);

  const handlePermissionChange = async (userId, page) => {
    try {
      const user = users.find((user) => user._id === userId);
      const newPermissions = user.permissions.includes(page)
        ? user.permissions.filter((permission) => permission !== page)
        : [...user.permissions, page];
      const response = await axios.patch(
        `http://localhost:3001/users/${userId}`,
        {
          permissions: newPermissions,
        }
      );
      setMessage(response.data.message);
      setUsers(
        users.map((user) => {
          if (user._id === userId) {
            return { ...user, permissions: newPermissions };
          }
          return user;
        })
      );
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Videos</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <input
                  type="checkbox"
                  checked={user.permissions.includes("/Videos")}
                  onChange={() => handlePermissionChange(user._id, "/Videos")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

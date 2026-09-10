import React, { useEffect, useState } from "react";

function Registration() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [editId, setEditId] = useState(null);

  // GET
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // POST
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("User Registered");

        setUsers([...users, { ...data, id: users.length + 1 }]);

        setForm({
          name: "",
          email: "",
          password: "",
        });
      });
  };

  // Edit Button
  const handleEdit = (user) => {
    setEditId(user.id);

    setForm({
      name: user.name,
      email: user.email,
      password: "",
    });
  };

  // PUT
  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedUsers = users.map((user) =>
          user.id === editId ? { ...user, ...form } : user
        );

        setUsers(updatedUsers);

        setForm({
          name: "",
          email: "",
          password: "",
        });

        setEditId(null);

        alert("User Updated");
      });
  };

  // DELETE
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      const filteredUsers = users.filter((user) => user.id !== id);

      setUsers(filteredUsers);

      alert("User Deleted");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />

        <br />
        <br />

        {editId ? (
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button type="submit">Register</button>
        )}
      </form>

      <hr />

      <h2>User List</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{user.name}</h3>

          <p>{user.email}</p>

          <button onClick={() => handleEdit(user)}>Edit</button>

          <button
            onClick={() => handleDelete(user.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Registration;
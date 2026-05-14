import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    bio: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addContact = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Name and Email required");
      return;
    }

    setContacts([...contacts, form]);

    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      bio: ""
    });
  };

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Manager</h2>

      {/* Search */}
      <input
        style={styles.search}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Form */}
      <form onSubmit={addContact} style={styles.form}>
        <input style={styles.input} name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input style={styles.input} name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <input style={styles.input} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input style={styles.input} name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea style={styles.textarea} name="bio" placeholder="Bio" value={form.bio} onChange={handleChange}></textarea>

        <button style={styles.button} type="submit">Add Contact</button>
      </form>

      {/* Contact List */}
      <div style={styles.list}>
        {filtered.length === 0 ? (
          <p>No contacts found</p>
        ) : (
          filtered.map((c, i) => (
            <div key={i} style={styles.card}>
              <h4>{c.name}</h4>
              <p><b>Company:</b> {c.company}</p>
              <p><b>Phone:</b> {c.phone}</p>
              <p><b>Email:</b> {c.email}</p>
              <p>{c.bio}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// 🎨 Simple CSS (inline styles)
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    color: "#333"
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  form: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px"
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }
};

export default App;

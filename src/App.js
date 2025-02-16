import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Users from Supabase</h1>
      {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => <li key={index}>{user.name}</li>)
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

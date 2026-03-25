import { useState, useEffect } from "react";
import { fetchUsers } from "./services/api";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>User Dashboard</h1>
      <UserList users={users} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { fetchUsers } from "./services/api";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

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
      <SearchBar onSearch={setSearch} />
      <UserList users={filteredUsers} />
    </>
  );
}

export default App;

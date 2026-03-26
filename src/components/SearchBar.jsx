function searchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default searchBar;

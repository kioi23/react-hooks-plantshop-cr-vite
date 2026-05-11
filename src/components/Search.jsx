function Search({ searchQuery, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Search;

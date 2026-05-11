
function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
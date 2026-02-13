type SearchBarProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange(value: string): void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      placeholder="Search projects..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Search projects"
      className="searchInput"
    />
  );
}

export default SearchBar;

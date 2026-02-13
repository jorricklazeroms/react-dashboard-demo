type StatusFilterProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange(value: string): void;
};

function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Filter by status"
      className="statusSelect"
    >
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="Done">Done</option>
      <option value="Blocked">Blocked</option>
    </select>
  );
}

export default StatusFilter;

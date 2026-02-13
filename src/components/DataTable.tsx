import type { TaskRow } from '../data/mockData';

type DataTableProps = {
  rows: TaskRow[];
};

function DataTable({ rows }: DataTableProps) {
  return (
    <section className="tableSection" aria-label="Task table section">
      <h2 className="sectionTitle">Task Status</h2>
      <table className="dataTable">
        <thead>
          <tr>
            <th>Project</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.owner}</td>
              <td>{row.status}</td>
              <td>{row.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default DataTable;

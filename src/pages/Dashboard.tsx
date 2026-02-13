import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import StatusFilter from '../components/StatusFilter';
import { mockData, stats } from '../data/mockData';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');

  const filtered = mockData
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (status === 'All' ? true : item.status === status));

  return (
    <div className="layout">
      <Sidebar />
      <main className="mainContent">
        <header className="mainHeader">
          <h2>Overview</h2>
        </header>
        <section className="statsGrid" aria-label="Stats">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </section>
        <div className="tableControls" aria-label="Table filters">
          <SearchBar value={search} onChange={setSearch} />
          <StatusFilter value={status} onChange={setStatus} />
        </div>
        <DataTable rows={filtered} />
      </main>
    </div>
  );
}

export default Dashboard;

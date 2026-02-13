const navItems = ['Overview', 'Projects', 'Tasks', 'Reports'];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <h1 className="sidebarTitle">Dashboard</h1>
      <nav>
        <ul className="sidebarNav">
          {navItems.map((item) => (
            <li key={item} className="sidebarItem">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

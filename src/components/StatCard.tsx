type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <article className="statCard" aria-label={`${label} stat`}>
      <p className="statLabel">{label}</p>
      <p className="statValue">{value}</p>
    </article>
  );
}

export default StatCard;

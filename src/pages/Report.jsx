export default function Report() {
  return (
    <div className="dashboard-container">
      <iframe
        src="/sinkhole_dashboard.html"
        title="Sinkhole Dashboard"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
      />
    </div>

  )
}

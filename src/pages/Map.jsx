export default function Map() {
  return (
    <div className="map-container">
      <iframe
        src="/sinkhole_risk_map.html"
        title="Sinkhole Risk Map"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
      />
    </div>
  )
}

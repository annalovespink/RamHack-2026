import predictions from '../data/predictions.json'

const sorted = [
  ...predictions.filter((p) => p.sinkhole_predicted),
  ...predictions.filter((p) => !p.sinkhole_predicted),
]

const flaggedCount = predictions.filter((p) => p.sinkhole_predicted).length

export default function Report() {
  return (
    <>
      <div className="stat-banner">
        <span className="stat-number">{flaggedCount}</span>
        <span className="stat-label"> of {predictions.length} zones flagged as high risk</span>
      </div>
      <main className="page">
        <h1>Zone Report</h1>
        <table className="predictions-table">
          <thead>
            <tr>
              <th>Cell ID</th>
              <th>Area</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p) => (
              <tr key={p.cell_id}>
                <td>{p.cell_id}</td>
                <td>{p.area}</td>
                <td className={p.sinkhole_predicted ? 'risk-high' : 'risk-low'}>
                  {p.sinkhole_predicted ? 'High' : 'Low'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}

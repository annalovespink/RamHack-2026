export default function About() {
  return (
    <main className="page">
      <h1>About BronxSafe</h1>
      <p>
        BronxSafe is a sinkhole prediction tool for the Bronx, built to give
        residents and city planners an early warning on high-risk zones before
        incidents occur.
      </p>
      <p>
        Using soil composition data, underground water flow patterns,
        infrastructure age, and historical records, our model classifies each
        grid cell across the Bronx as high or low risk. The goal is to support
        proactive maintenance rather than reactive repair.
      </p>
      <p>Built at RamHack 2026.</p>
    </main>
  )
}

import heroImg from '../assets/heroimage.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImg} className="hero-image" alt="Aerial view of the Bronx" />
        <div className="hero-left">
          <h1 className="hero-heading">
            <span className="hero-line-1">Supporting the</span>
            <span className="hero-line-2">building of a resilient New York</span>
            <span className="hero-line-3">Predicting ground collapse before it happens — powered by machine learning.</span>
          </h1>
          <Link to="/about" className="hero-btn">Learn More</Link>
        </div>
      </section>

      <section className="about-section">
        <span className="about-label">[01] — About the Project</span>
        <p className="about-body">
        New York City reported over 3,900 street cave-ins in a single year. Resilient 
        NYC uses machine learning trained on 311 data, sewage infrastructure, and weather 
        patterns to predict where sinkholes are likely to occur - before the ground gives way.
        </p>
        <div className="stats-row">
          <div className="stat-col">
            <span className="stat-big">3,905</span>
            <span className="stat-tag">Street cave-ins in 2022</span>
            <p className="stat-desc">New Yorks highest recorded number of street collapses in a single fiscal year</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span className="stat-big">45%</span>
            <span className="stat-tag">Caused by city infrastructure</span>
            <p className="stat-desc">Nearly half of all cave-ins trace back to aging water mains and sewer lines owned by the city</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span className="stat-big">38%</span>
            <span className="stat-tag">Year-over-year increase</span>
            <p className="stat-desc">Sinkhole incidents rose 38% in a single year as climate change and deteriorating pipes accelerate the problem</p>
          </div>
        </div>
      </section>
      <section className="tools-section">
        <span className="tools-label">[02] — Our Tools</span>
        <h2 className="tools-heading">The tools to understand what's beneath the surface</h2>
        <div className="tools-cards">
          <div className="tool-card">
            <h3 className="tool-title">Interactive Risk Map</h3>
            <p className="tool-desc">Navigate an interactive heatmap showing sinkhole probability across every 500-meter grid cell in New York City, color-coded from low risk to high risk</p>
            <Link to="/map" className="tool-btn">View Map</Link>
          </div>
          <div className="tool-card">
            <h3 className="tool-title">Risk Report Dashboard</h3>
            <p className="tool-desc">Explore a comprehensive dashboard of monthly risk predictions, high-risk zones, and city-wide risk in one place</p>
            <Link to="/report" className="tool-btn">View Report</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

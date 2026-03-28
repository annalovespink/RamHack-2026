import heroImg from '../assets/heroimage.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={heroImg} className="hero-image" alt="Aerial view of the Bronx" />
        <div className="hero-left">
          <h1 className="hero-heading">
            <span className="hero-line-1">Hero Title</span>
            <span className="hero-line-2">We help plan for the future</span>
            <span className="hero-line-3">Our model predicts where sinkholes are likely to occur</span>
          </h1>
        </div>
      </section>

      <section className="about-section">
        <span className="about-label">[01] — About the Project</span>
        <p className="about-body">
          BronxSafe uses machine learning to predict sinkhole risk across the Bronx
          before incidents happen. By combining NYC 311 complaint data, aging sewage
          infrastructure records, and historical weather patterns, our model identifies
          the grid cells most likely to experience ground failure — giving residents
          and city planners the foresight to act.
        </p>
        <div className="stats-row">
          <div className="stat-col">
            <span className="stat-big">228</span>
            <span className="stat-tag">Sinkholes reported</span>
            <p className="stat-desc">Sinkhole-related 311 complaints filed in NYC in 2023 alone.</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span className="stat-big">6,300+</span>
            <span className="stat-tag">Miles of sewer pipe</span>
            <p className="stat-desc">NYC's sewer network, much of it over 100 years old and at risk of collapse.</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <span className="stat-big">$40M</span>
            <span className="stat-tag">Average repair cost</span>
            <p className="stat-desc">Estimated cost of a single major sinkhole event including infrastructure and road repair.</p>
          </div>
        </div>
      </section>
      <section className="tools-section">
        <span className="tools-label">[02] — Our Tools</span>
        <h2 className="tools-heading">Everything you need to understand sinkhole risk in the Bronx</h2>
        <div className="tools-cards">
          <div className="tool-card">
            <h3 className="tool-title">Interactive Risk Map</h3>
            <p className="tool-desc">Explore color-coded sinkhole predictions across every Bronx neighborhood.</p>
            <Link to="/map" className="tool-btn">View Map</Link>
          </div>
          <div className="tool-card">
            <h3 className="tool-title">Detailed Risk Reports</h3>
            <p className="tool-desc">View the top flagged zones with contributing factors and model confidence.</p>
            <Link to="/report" className="tool-btn">View Report</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

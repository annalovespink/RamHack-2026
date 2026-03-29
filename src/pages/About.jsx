import aboutImage from '../assets/aboutimage.jpg'
import aboutImage2 from '../assets/aboutimage2.jpg'

export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <span className="about-page-label">[01] — The Issue</span>
        <h1 className="about-page-heading">Sinkholes are a growing crisis in New York City</h1>
      </section>

      <section className="about-block">
        <div className="about-block-text">
          <p>
            Sinkholes have increasingly become an issue in NYC and other major cities. The Department
            of Environmental Protection (DEP) identified 3,921 sinkholes in 2022 alone, a jump from
            2,839 reported in 2021. The city's climate officer has attributed this increase to climate
            change, aging infrastructure, and extreme weather. Sinkholes cause millions of dollars of
            damage every year, not to mention any injuries caused. Individual repairs range from $1,500
            to $3,000+ per sinkhole.
          </p>
          <p>
            You may be wondering why more is not done to prevent these sinkholes from occurring. There
            are many contributing factors to sinkhole formation, and there is no easy predictor or clear
            signs that a sinkhole will occur. This makes it increasingly difficult to prevent sinkhole damage.
          </p>
        </div>
        <div className="about-block-images">
          <div className="about-img-frame">
            <img src={aboutImage} alt="Complaints over time" />
            <span className="about-img-caption">Complaints over time</span>
          </div>
          <div className="about-img-frame">
            <img src={aboutImage2} alt="Cave-in reports by borough" />
            <span className="about-img-caption">Cave-in reports by borough</span>
          </div>
        </div>
      </section>

      <section className="about-block about-block-red">
        <span className="about-page-label">[02] — Our Solution</span>

        <h2 className="about-section-heading">A machine learning approach to prediction</h2>
        <p>
          We built a machine learning model that combines the NYC 311 cave-in complaints dataset with
          a number of other datasets, comparing other features including soil data, precipitation, road
          qualities, and nearby sinkhole complaints. Overall, our model achieves a 55% precision in
          predicting that a sinkhole will appear in a 500 meter square radius.
        </p>
      </section>

      <section className="about-block about-block-alt">
        <span className="about-page-label">[03] — Limitations & Further Directions</span>
        <h2 className="about-section-heading">Where we go from here</h2>
        <p>
          One key limitation that prevented us from achieving a higher prediction accuracy was noisy
          data concerning the 311 report. Many of the cave-in reports may be misclassified as sinkholes,
          since some could be complaints about potholes or other miscellaneous damage.
        </p>
        <p>
          Additionally, we were missing one essential piece of information in our analysis: the
          construction date of the sewers. This data is unfortunately not publicly available, so the
          closest we could get is the time of construction of nearby buildings. To improve our prediction
          accuracy, we would need more descriptive labels of the cave-ins and access to sewer construction
          records.
        </p>
      </section>

    </div>
  )
}

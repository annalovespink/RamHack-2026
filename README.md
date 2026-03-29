**Resilient NYC**
A sinkhole prediction model built by Durga Desai, Anna Simonsen, and Sarah Zahaykevich for RamHacks 2026 in the Environment and Best Tech for Good tracks.

**The Issue:** 

New York City faces a growing sustainable infrastructure challenge as aging water and sewer systems, and increasing rainfall due to climate change place mounting stress on the ground beneath the city. These conditions increase the risk of sinkholes, which can disrupt transportation, damage property, and threaten public safety. More broadly, these failures reveal a larger sustainability issue: critical urban infrastructure is aging faster than it is being proactively maintained. When cities respond only after roads collapse or utilities fail, repairs become more expensive, and less sustainable over time.
This project approaches sinkhole risk as an issue of infrastructure resilience and preventative planning across New York City. By using publicly available civic, environmental, and infrastructure-related data, we aim to identify where conditions suggest elevated risk before major failures occur. A predictive, data-driven approach can help shift city management from reactive emergency repair to earlier, smarter intervention. In the long term, that supports more sustainable urban systems by reducing maintenance costs, improving public safety, and helping the city allocate resources more efficiently.

**Technologies Used**
For this project we used Jupyter Notebook to build the Random Forest model.

Frontend:
React 19
React Router DOM 6
Vite 8

Visualisation:
Plotly.js (embedded via HTML export)

Styling:
Plain CSS (no framework)
Barlow Condensed — Google Fonts

Hosting & Deployment:
Vercel

Design:
Figma

**How the Model Works**

Our model uses a Random Forest machine learning algorithm to predict where sinkholes are most likely to occur across New York City. The city is divided into a grid of 500m by 500m cells, and for each cell we calculate a set of features that capture environmental conditions and infrastructure stress. These features include 
Month
PriorMonth Complaints
Complaints in the last 3 months
Water main breaks last month
Water main breaks in the last 3 months
Pavement quality rating
Elevation
Depth
Neighboring sinkhole incidents
Neighboring water breaks
The model learns patterns from historical data to estimate the probability that a sinkhole will occur in each location. Because several of these inputs are time-based, the model can also be updated automatically each month as new 311, water main break, and precipitation data become available.
A Random Forest works by combining many decision trees, each of which makes a prediction based on different subsets of the data. By averaging across these trees, the model produces more accurate and stable predictions. The final output is a probability score for each grid cell, which is visualized on the interactive map. Higher values indicate areas where underlying conditions suggest greater risk, allowing planners to prioritize inspection and preventative maintenance.

**Who will benefit from this model?**

This model is designed for DOT, DEP, and other city infrastructure teams that need to identify high-risk areas and prioritize inspections before failures occur. It can also support community members, local organizations, and planners who want to better understand infrastructure risk and advocate for safer, more resilient neighborhoods.

**Phase II Implementation (Coming Soon!)**

As part of a Phase II implementation, this model is designed to support automated monthly updates as new 311, water main break, and precipitation data become available, and will display on this page. 

**Model Performance**

The model performed well in distinguishing higher-risk from lower-risk areas across New York City, achieving 0.85 accuracy and an AUC of 0.772, which suggests it captures meaningful patterns in infrastructure stress and environmental conditions. After threshold tuning, it also reached 0.39 precision, meaning that a substantial share of the locations it flagged as high risk were correctly identified. While the model’s 0.27 recall and 0.32 F1 score are more modest, that is understandable given that sinkholes are relatively rare events and the model relies on noisy public data.. In this context, the model is still valuable as a screening tool for prioritizing inspections in the areas most likely to be at risk.

**Feature Importance**

<img width="762" height="807" alt="image" src="https://github.com/user-attachments/assets/06becb0a-4964-4847-8f19-59100dc4afeb" />

This graph shows that the model relies most heavily on recent complaint activity, especially complaints_in_last_3months and prior_month_complaints, followed by neighboring_sinkhole_incidents. Together, these top features suggest that repeated complaints and nearby collapses are the strongest warning signs of elevated sinkhole risk.

<img width="791" height="671" alt="image" src="https://github.com/user-attachments/assets/63ef29a3-39fe-4620-adb8-922b60197fc4" />

The ROC curve shows how well the model distinguishes high-risk from low-risk areas. An AUC of 0.79 indicates strong predictive ability.

**Potential Savings**

If earlier inspections enabled by our model prevent just 1% of FY2023 roadway-injury payouts in NYC ($47.4 million) and 5% of FY2025 water-main breaks (403 breaks), the city could save roughly $670,000 per year: about $474,000 from fewer roadway claims plus about $200,000 from avoiding ~20 breaks, using the AWWA benchmark of $2.6 billion / 260,000 breaks ≈ $10,000 per break.
That is a conservative estimate and does not include avoided traffic disruption, emergency-response costs, or broader sinkhole damages, which the USGS says average at least $300 million annually in the United States.


import React, { useState } from 'react';
import '../styles/Projects.css';
import salesImg from '../assets/images/sales.png';
import customerImg from '../assets/images/customer.jpg';
import revenueImg from '../assets/images/revenue.jpg';
import predictiveImg from '../assets/images/predictive.png';
import reccsystemImg from '../assets/images/reccsystem.png';
import fraudImg from '../assets/images/fraud.png';
import laptopImg from '../assets/images/laptop.png';

// Updated project data with problem and solution fields
const projectsData = {
  dataAnalyst: [
    {
      id: 1,
      name: 'Sales Dashboard',
      image: salesImg,
      demoLink: 'https://your-demo-link.com/sales-dashboard',
      githubLink: 'https://github.com/your-repo/sales-dashboard',
      problem: 'related to inconsistent sales performance tracking across regions and teams.',
      solution: 'can identify high-performing regions and predict future sales trends',
      dataCollection: [
        'Collected sales data from various sources.',
        'Performed data cleaning, removing inconsistencies and errors.',
        'Engineered features such as total sales per region.',
      ],
      eda: [
        'Analyzed sales trends across different regions.',
        'Used bar charts to visualize top-performing sales teams.',
        'Performed statistical analysis to detect sales outliers.',
      ],
      modeling: [
        'Segmentation of sales data by region.',
        'Used time series forecasting to predict future sales trends.',
      ],
      keyFeatures: [
        'Region-wise sales performance',
        'Top-selling products',
        'Sales per employee',
      ],
      modelEvaluation: [
        'Used RMSE and MAE for time series model evaluation.',
        'Confusion matrix for classification model evaluation.',
      ],
      insights:
        'Sales were highest in region X during the summer season, and sales dropped in region Y during winter months.',
      challenges: [
        'Data discrepancies between different sources.',
        'Handling missing data for certain time periods.',
      ],
      tools: ['Python (Pandas, NumPy)', 'Power BI for data visualization', 'SQL for querying the database'],
      results:
        'Developed a comprehensive sales dashboard, helping the business identify key regions for expansion.',
      futureImprovements: [
        'Incorporate real-time data to improve decision-making.',
        'Use machine learning models for more accurate sales predictions.',
      ],
    },
    {
      id: 2,
      name: 'Customer Segmentation',
      image: customerImg,
      demoLink: 'https://your-demo-link.com/customer-segmentation',
      githubLink: 'https://github.com/your-repo/customer-segmentation',
      problem: 'with poorly targeted marketing campaigns and low customer retention rates.',
      solution: 'segments customers based on behavior and value to enable personalized marketing',
      dataCollection: [
        'Collected customer purchase history and demographic data.',
        'Cleaned the data by removing duplicates and standardizing formats.',
        'Engineered features such as purchase frequency and customer lifetime value.',
      ],
      eda: [
        'Analyzed customer purchase patterns using clustering techniques.',
        'Used scatter plots to visualize customer segments.',
        'Identified high-value customer groups.',
      ],
      modeling: [
        'Used K-Means clustering to segment customers.',
        'Tested different numbers of clusters to find the optimal segmentation.',
      ],
      keyFeatures: ['Customer Lifetime Value', 'Purchase Frequency', 'Average Transaction Value'],
      modelEvaluation: ['Evaluated clustering results using silhouette score and elbow method.'],
      insights:
        'Identified three major customer segments: high-value, mid-value, and low-value customers. High-value customers contributed to 70% of revenue.',
      challenges: ['Determining the optimal number of customer segments.', 'Handling noise and outliers in purchase data.'],
      tools: ['Python (Scikit-learn for clustering)', 'SQL for querying customer data', 'Excel for initial data exploration'],
      results: 'The customer segmentation model allowed targeted marketing efforts, increasing customer retention by 15%.',
      futureImprovements: [
        'Incorporate additional behavioral data such as website activity.',
        'Use deep learning techniques for more accurate segmentation.',
      ],
    },
    {
      id: 3,
      name: 'Revenue Analysis',
      image: revenueImg,
      demoLink: 'https://your-demo-link.com/revenue-analysis',
      githubLink: 'https://github.com/your-repo/revenue-analysis',
      problem: 'in understanding revenue drivers and forecasting future financial performance.',
      solution: 'analyzes historical revenue patterns and predicts future revenue trends',
      dataCollection: [
        'Collected revenue data from sales reports and financial statements.',
        'Cleaned and preprocessed data to ensure accuracy.',
        'Engineered features like monthly revenue growth rates.',
      ],
      eda: [
        'Analyzed revenue trends over the last 5 years.',
        'Visualized seasonal variations using line graphs.',
        'Identified key drivers of revenue growth through correlation analysis.',
      ],
      modeling: [
        'Implemented linear regression to forecast future revenues.',
        'Used time series analysis to capture seasonal trends.',
      ],
      keyFeatures: [
        'Monthly and yearly revenue breakdowns',
        'Revenue growth forecasts',
        'Key revenue drivers identified',
      ],
      modelEvaluation: [
        'Evaluated regression model performance using R² and adjusted R².',
        'Performed residual analysis for model diagnostics.',
      ],
      insights:
        'Revenue grew by 15% annually, driven by product X and marketing initiatives in Q2.',
      challenges: [
        'Data integration from multiple systems was complex.',
        'Identifying external factors impacting revenue was challenging.',
      ],
      tools: ['Python (Pandas, StatsModels)', 'Power BI for visualization', 'SQL for data extraction'],
      results:
        'Developed a detailed revenue analysis report that informed strategic planning and investment decisions.',
      futureImprovements: [
        'Integrate real-time revenue tracking capabilities.',
        'Explore advanced forecasting techniques using machine learning.',
      ],
    },
  ],
  dataScientist: [
    {
      id: 1,
      name: 'Predictive Modeling for Churn',
      image: predictiveImg,
      demoLink: 'https://your-demo-link.com/churn-modeling',
      githubLink: 'https://github.com/your-repo/churn-modeling',
      problem: 'of high customer churn rate impacting business revenue and growth.',
      solution: 'predicts which customers are likely to churn, allowing for proactive retention efforts',
      dataCollection: [
        'Collected customer interaction and transaction data from multiple channels.',
        'Cleaned the data by addressing missing values and outliers.',
        'Feature engineered attributes like frequency of interaction and tenure.',
      ],
      eda: [
        'Visualized churn trends using histograms and scatter plots.',
        'Explored correlations between churn and various features.',
        'Performed hypothesis testing to validate key assumptions.',
      ],
      modeling: ['Built models using Logistic Regression, Random Forest, and XGBoost.', 'Performed hyperparameter tuning using grid search.'],
      keyFeatures: ['Customer Tenure', 'Frequency of Interaction', 'Last Purchase Date'],
      modelEvaluation: ['Evaluated models using ROC AUC score, precision, recall, and F1 score.', 'Confusion matrix analysis to minimize false negatives.'],
      insights: 'Customers with shorter tenure and reduced interaction frequency were more likely to churn.',
      challenges: ['Imbalanced dataset requiring techniques like SMOTE to balance classes.', 'Feature selection was challenging due to correlated features.'],
      tools: ['Python (Pandas, Scikit-learn, XGBoost)', 'Jupyter Notebook for development', 'Power BI for visualizations'],
      results: 'The final model achieved an accuracy of 85% with high recall, helping reduce churn by 20%.',
      futureImprovements: ['Implement a real-time churn prediction system.', 'Explore more advanced techniques such as deep learning models.'],
    },
    {
      id: 2,
      name: 'Fraud Detection',
      image: fraudImg,
      demoLink: 'https://your-demo-link.com/fraud-prediction',
      githubLink: 'https://github.com/your-repo/fraud-prediction',
      problem: 'of detecting and preventing fraudulent transactions in real-time.',
      solution: 'identifies potentially fraudulent transactions with high accuracy',
      dataCollection: [
        'Collected transaction data from various sources including online payments and user accounts.',
        'Cleaned data by removing duplicates and handling missing values.',
        'Engineered features like transaction amount, user location, and transaction frequency.',
      ],
      eda: [
        'Analyzed transaction distributions and identified patterns using visualizations.',
        'Explored relationships between features and fraudulent transactions.',
        'Performed anomaly detection to identify unusual patterns in the data.',
      ],
      modeling: [
        'Built models using Logistic Regression, Random Forest, and Gradient Boosting.',
        'Utilized techniques like cross-validation and grid search for hyperparameter tuning.',
      ],
      keyFeatures: ['Transaction Amount', 'Transaction Time', 'User Location'],
      modelEvaluation: [
        'Evaluated models using AUC-ROC curve, precision, recall, and F1 score.',
        'Conducted feature importance analysis to identify critical predictors.',
      ],
      insights: 'Certain transaction patterns, such as high amounts and unusual locations, indicated higher fraud risk.',
      challenges: [
        'Dealing with class imbalance in the dataset.',
        'Model interpretability was a challenge due to the complexity of ensemble models.',
      ],
      tools: ['Python (Pandas, Scikit-learn, XGBoost)', 'Jupyter Notebook for development', 'Tableau for visualizations'],
      results: 'Achieved an accuracy of 90% with a high recall of fraudulent transactions, significantly reducing losses.',
      futureImprovements: [
        'Integrate real-time transaction monitoring for immediate fraud detection.',
        'Experiment with deep learning models for improved performance.',
      ],
    },
    {
      id: 3,
      name: 'Laptop Price Prediction',
      image: laptopImg,
      demoLink: 'https://your-demo-link.com/laptop-price-prediction',
      githubLink: 'https://github.com/your-repo/laptop-price-prediction',
      problem: 'of accurately predicting laptop prices based on specifications and market trends.',
      solution: 'predicts laptop prices based on specifications with high accuracy',
      dataCollection: [
        'Collected data on laptop specifications, prices, and user ratings from multiple online retailers.',
        'Cleaned the dataset by handling missing values and normalizing price ranges.',
        'Feature engineered attributes such as processor type, RAM size, storage type, and brand.',
      ],
      eda: [
        'Visualized relationships between features and prices using scatter plots and box plots.',
        'Explored correlations between specifications and market prices.',
        'Identified outliers in pricing based on specifications.',
      ],
      modeling: [
        'Built regression models including Linear Regression, Random Forest, and Gradient Boosting.',
        'Performed hyperparameter tuning to optimize model performance.',
      ],
      keyFeatures: ['Processor Type', 'RAM Size', 'Storage Type', 'Brand'],
      modelEvaluation: [
        'Evaluated models using RMSE, R-squared, and MAE metrics.',
        'Conducted cross-validation to ensure model robustness.',
      ],
      insights: 'High RAM size and SSD storage positively influenced laptop prices, while older processors led to lower prices.',
      challenges: [
        'Dealing with the complexity of feature interactions.',
        'Ensuring data accuracy from multiple sources was challenging.',
      ],
      tools: ['Python (Pandas, Scikit-learn, NumPy)', 'Jupyter Notebook for development', 'Matplotlib and Seaborn for visualizations'],
      results: 'The final model achieved an R-squared value of 0.87, indicating strong predictive performance for laptop prices.',
      futureImprovements: [
        'Implement a web application for users to input specifications and receive price predictions.',
        'Explore advanced techniques such as deep learning for improved accuracy.',
      ],
    },
    {
      id: 4,
      name: 'Recommendation System',
      image: reccsystemImg,
      demoLink: 'https://your-demo-link.com/recommendation-system',
      githubLink: 'https://github.com/your-repo/recommendation-system',
      problem: 'of increasing user engagement and satisfaction through personalized recommendations.',
      solution: 'provides personalized recommendations based on user behavior and preferences',
      dataCollection: [
        'Collected user-item interaction data from the platform.',
        'Handled missing values and performed normalization.',
        'Engineered features such as user preferences and item popularity.',
      ],
      eda: [
        'Analyzed user behavior through visualizations of interaction patterns.',
        'Explored relationships between user demographics and preferences.',
        'Identified potential biases in the data affecting recommendations.',
      ],
      modeling: [
        'Developed collaborative filtering and content-based filtering models.',
        'Utilized matrix factorization techniques to improve recommendations.',
      ],
      keyFeatures: ['User Preferences', 'Item Attributes', 'Interaction History'],
      modelEvaluation: [
        'Assessed models using metrics like RMSE, precision at k, and recall.',
        'Conducted A/B testing to validate recommendation effectiveness.',
      ],
      insights: 'Users showed a strong preference for items similar to their past interactions.',
      challenges: [
        'Sparsity of user-item interaction data was a significant issue.',
        'Scalability of the recommendation engine for a large user base.',
      ],
      tools: ['Python (Surprise, Pandas, NumPy)', 'Jupyter Notebook for development', 'Dash for web app deployment'],
      results: 'The recommendation system improved user engagement by 30%, enhancing user satisfaction.',
      futureImprovements: [
        'Incorporate more advanced NLP techniques for content-based recommendations.',
        'Explore reinforcement learning for dynamic recommendations.',
      ],
    }
  ],
};

// Component for Project Cards
const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-inner">
        <div className="project-image-container">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="project-info">
          <h3>{project.name}</h3>
          <p className="project-description">{project.insights.substring(0, 100)}...</p>
          <div className="project-tools">
            {project.tools.slice(0, 2).map((tool, index) => (
              <span key={index} className="tool-badge">{tool.split(' ')[0]}</span>
            ))}
            {project.tools.length > 2 && (
              <span className="tool-badge">+{project.tools.length - 2} more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Project Details
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <div className="project-modal-overlay">
      <div className="project-modal">
        <span className="close-button" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{project.name}</h2>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                <i className="fas fa-play-circle"></i> Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                <i className="fab fa-github"></i> Code
              </a>
            </div>
          </div>
          
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          
          <div className="project-detail-content">
            <div className="detail-section">
              <h3>Overview</h3>
              <p><strong>Problem:</strong> {project.problem}</p>
              <p><strong>Solution:</strong> {project.solution}</p>
            </div>
            
            <div className="detail-section">
              <h3>Approach</h3>
              <div className="approach-grid">
                <div className="approach-item">
                  <h4>Data Collection</h4>
                  <ul>
                    {project.dataCollection.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="approach-item">
                  <h4>Analysis</h4>
                  <ul>
                    {project.eda.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="approach-item">
                  <h4>Modeling</h4>
                  <ul>
                    {project.modeling.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Insights & Results</h3>
              <p>{project.insights}</p>
              <p>{project.results}</p>
            </div>
            
            <div className="detail-section">
              <h3>Tools & Technologies</h3>
              <div className="tools-list">
                {project.tools.map((tool, index) => (
                  <span key={index} className="tool-badge tool-badge-lg">{tool}</span>
                ))}
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Challenges & Future Improvements</h3>
              <div className="two-column">
                <div>
                  <h4>Challenges</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Future Work</h4>
                  <ul>
                    {project.futureImprovements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedRole, setSelectedRole] = useState('dataAnalyst');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setFilter('all');
  };
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Add a class to body to prevent scrolling when modal is open
    document.body.classList.add('modal-open');
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    // Remove the class from body to allow scrolling again
    document.body.classList.remove('modal-open');
  };
  
  // Close modal when clicking escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my data analytics and data science work</p>
        
        <div className="role-tabs">
          <button 
            className={`role-tab ${selectedRole === 'dataAnalyst' ? 'active' : ''}`}
            onClick={() => handleRoleChange('dataAnalyst')}
          >
            Data Analysis
          </button>
          <button 
            className={`role-tab ${selectedRole === 'dataScientist' ? 'active' : ''}`}
            onClick={() => handleRoleChange('dataScientist')}
          >
            Data Science
          </button> 
        </div>
        
        {/* Filter options could be added here if needed */}
        {/* <div className="filter-options">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'python' ? 'active' : ''}`} onClick={() => setFilter('python')}>Python</button>
          <button className={`filter-btn ${filter === 'visualization' ? 'active' : ''}`} onClick={() => setFilter('visualization')}>Visualization</button>
        </div> */}
        
        <div className="projects-grid">
          {projectsData[selectedRole].map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
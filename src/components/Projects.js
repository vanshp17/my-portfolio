  import React, { useState } from 'react';
  import '../styles/Projects.css'; // Import the specific styles for Projects component
  import salesImg from '../assets/images/sales.png';
  import customerImg from '../assets/images/customer.jpg';
  import revenueImg from '../assets/images/revenue.jpg';
  import predictiveImg from '../assets/images/predictive.png';
  import reccsystemImg from '../assets/images/reccsystem.png';
  import fraudImg from '../assets/images/fraud.png';
  import laptopImg from '../assets/images/laptop.png';
  
  
  
  
  const projectsData = {
    dataAnalyst: [
      {
        id: 1,
        name: 'Sales Dashboard',
        image:  salesImg,
        problem: 'Need to visualize sales performance across regions.',
        solution: 'Created an interactive dashboard using Power BI to track sales metrics.'
      },
      {
        id: 2,
        name: 'Customer Segmentation',
        image: customerImg,
        problem: 'Segment customers to tailor marketing strategies.',
        solution: 'Performed clustering analysis using K-means in Python to segment customers.'
      },
      {
        id: 3,
        name: 'Revenue Analysis',
        image: revenueImg,
        problem: 'Identify trends and anomalies in revenue data.',
        solution: 'Analyzed revenue data in Excel and visualized trends using Power BI.'
      },
      {
        id: 4,
        name: 'Sales Dashboard',
        image:  salesImg,
        problem: 'Need to visualize sales performance across regions.',
        solution: 'Created an interactive dashboard using Power BI to track sales metrics.'
      }
    ],
    dataScientist: [
      {
        id: 1,
        name: 'Predictive Modeling',
        image: predictiveImg,
        problem: 'Predict future trends based on historical data.',
        solution: 'Built regression models using Scikit-learn to predict future trends.'
      },
      {
        id: 2,
        name: 'Recommendation System',
        image: reccsystemImg,
        problem: 'Provide personalized recommendations to users.',
        solution: 'Developed a recommendation system using collaborative filtering techniques.'
      },
      {
        id: 3,
        name: 'Fraud Detection',
        image: fraudImg,
        problem: 'Detect fraudulent transactions in financial data.',
        solution: 'Implemented anomaly detection algorithms using machine learning techniques.'
      },
      {
        id: 4,
        name: 'Laptop Price Predictor',
        image: laptopImg,
        problem: 'Detect fraudulent transactions in financial data.',
        solution: 'Implemented anomaly detection algorithms using machine learning techniques.'
      }
    ]
  };
  
  const ProjectDetail = ({ project }) => (
    <div className="project-detail">
      <h3>{project.name}</h3>
      <img src={project.image} alt={project.name} />
      <h4>Problem:</h4>
      <p>{project.problem}</p>
      <h4>Solution:</h4>
      <p>{project.solution}</p>
    </div>
  );
  
  const Projects = () => {
    const [selectedRole, setSelectedRole] = useState('dataAnalyst');
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleRoleChange = (role) => {
      setSelectedRole(role);
      setSelectedProject(null); // Reset selected project when changing roles
    };
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };
  
    return (
      <section id="projects" className="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="role-buttons">
          <button onClick={() => handleRoleChange('dataAnalyst')}>Data Analysis</button>
          <button onClick={() => handleRoleChange('dataScientist')}>Data Science</button>
        </div>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <div className="projects-container">
            {projectsData[selectedRole].map(project => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };
  
  export default Projects;
  
  

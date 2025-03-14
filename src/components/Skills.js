import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';
import { FaPython, FaDatabase, FaChartLine, FaLaptopCode, FaCode, FaChartBar, FaCogs, FaBrain, FaServer, FaTable } from 'react-icons/fa';
import { SiPandas, SiTableau, SiPowerbi, SiNumpy, SiScikitlearn, SiMicrosoftazure, SiPlotly, SiTensorflow, SiPytorch } from 'react-icons/si';
import { FaRProject } from 'react-icons/fa';
import { AiOutlineCluster, AiOutlineCloud } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { MdOutlineAnalytics, MdOutlineTimeline } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categories = entry.target.querySelectorAll('.skills-category');
            
            categories.forEach((category, index) => {
              setTimeout(() => {
                category.classList.add('fade-in');
                
                const listItems = category.querySelectorAll('.skills-list li');
                listItems.forEach((item, itemIndex) => {
                  setTimeout(() => {
                    item.classList.add('slide-in');
                  }, 100 * itemIndex);
                });
              }, 150 * index);
            });
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reorganized skills for better balance
  const skillsData = [
    {
      title: "Programming",
      icon: <FaCode />,
      skills: [
        { icon: <FaPython />, name: "Python", level: 90 },
        { icon: <FaDatabase />, name: "SQL", level: 85 },
        { icon: <FaRProject />, name: "R", level: 80 }
      ]
    },
    {
      title: "Data Analysis",
      icon: <MdOutlineAnalytics />,
      skills: [
        { icon: <FaTable />, name: "Excel", level: 95 },
        { icon: <SiPandas />, name: "Pandas", level: 90 },
        { icon: <SiNumpy />, name: "NumPy", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <FaBrain />,
      skills: [
        { icon: <SiScikitlearn />, name: "Scikit-learn", level: 85 },
        { icon: <FaChartLine />, name: "Regression", level: 80 },
        { icon: <AiOutlineCluster />, name: "Clustering", level: 75 }
      ]
    },
    {
      title: "Data Visualization",
      icon: <FaChartBar />,
      skills: [
        { icon: <SiPlotly />, name: "Plotly", level: 85 },
        { icon: <SiPowerbi />, name: "Power BI", level: 80 },
        { icon: <SiTableau />, name: "Tableau", level: 75 }
      ]
    },
    {
      title: "Deep Learning",
      icon: <FaRobot />,
      skills: [
        { icon: <SiTensorflow />, name: "TensorFlow", level: 75 },
        { icon: <SiPytorch />, name: "PyTorch", level: 70 },
        { icon: <FaCogs />, name: "Neural Networks", level: 80 }
      ]
    },
    {
      title: "Advanced Analytics",
      icon: <BiStats />,
      skills: [
        { icon: <MdOutlineTimeline />, name: "Time Series", level: 80 },
        { icon: <FaChartLine />, name: "Forecasting", level: 75 },
        { icon: <AiOutlineCluster />, name: "Segmentation", level: 70 }
      ]
    },
    {
      title: "Big Data",
      icon: <FaDatabase />,
      skills: [
        { icon: <FaLaptopCode />, name: "Spark", level: 70 },
        { icon: <FaDatabase />, name: "NoSQL", level: 65 },
        { icon: <FaDatabase />, name: "Data Pipelines", level: 75 }
      ]
    },
    {
      title: "Cloud Services",
      icon: <AiOutlineCloud />,
      skills: [
        { icon: <SiMicrosoftazure />, name: "Azure", level: 80 },
        { icon: <FaServer />, name: "Cloud Compute", level: 75 },
        { icon: <FaDatabase />, name: "Cloud Storage", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div 
              className="skills-category staggered-fade-in" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <div className="category-icon">{category.icon}</div>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="staggered-slide-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05) + 0.2}s` }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <div style={{ flexGrow: 1 }}>
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.05) + 0.5}s` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css'; // Import the specific styles for Skills component
import { FaPython, FaDatabase, FaChartLine, FaLaptopCode, FaCloud } from 'react-icons/fa';
import { SiPandas, SiTableau, SiPowerbi, SiNumpy, SiScikitlearn, SiMicrosoftazure, SiPlotly } from 'react-icons/si';
import { FaRProject } from 'react-icons/fa';
import { AiOutlineCluster } from 'react-icons/ai';
import { FaPercentage } from "react-icons/fa";
import { MdMemory,MdTextFields,MdOutlineTimeline } from "react-icons/md";
import { FaRobot,FaBrain } from "react-icons/fa";

const Skills = () => (
  <section id="skills" className="skills">
    <h2 className="skills-title">My Skills</h2>
    <div className="skills-grid">
      <div className="skills-category">
        <h3 className="category-title">Programming Languages</h3>
        <ul className="skills-list">
          <li><FaPython /> Python</li>
          <li><FaDatabase /> SQL</li>
          <li><FaRProject /> R</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Data Science Libraries and Tools</h3>
        <ul className="skills-list">
          <li><SiNumpy /> NumPy</li>
          <li><SiPandas /> Pandas</li>
          <li><FaLaptopCode /> Matplotlib</li>
          <li><SiScikitlearn /> Scikit-learn</li>
          <li><SiPlotly /> Plotly</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Data Analysis and Visualization</h3>
        <ul className="skills-list">
          <li><FaLaptopCode /> Excel</li>
          <li><SiPowerbi /> Power BI</li>
          <li><SiTableau /> Tableau</li>
        </ul>
      </div>
      
      <div className="skills-category">
        <h3 className="category-title">Machine Learning</h3>
        <ul className="skills-list">
          <li><FaChartLine /> Regression</li>
          <li><FaPercentage /> Classification</li>
          <li><AiOutlineCluster /> Clustering</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Deep Learning</h3>
        <ul className="skills-list">
          <li><MdMemory /> ANN</li>
          <li><FaRobot /> CNN</li>
          <li><FaBrain /> RNN</li>
          <li><MdTextFields /> NLP</li>
          <li><MdOutlineTimeline /> Time Series</li>
        </ul>
      </div>
      <div className="skills-category">
        <h3 className="category-title">Cloud Computing</h3>
        <ul className="skills-list">
          <li><SiMicrosoftazure /> Azure</li>
        </ul>
      </div>

    </div>
  </section>
);

export default Skills;

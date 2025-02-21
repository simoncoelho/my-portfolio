import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Project.css';

const Project = ({ title, markdownContent }) => {
  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <div className="project-content">
        <ReactMarkdown>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Project;
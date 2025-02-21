import React from 'react';
import Project from './Project';

const sampleMarkdown = `
# Project Overview

This project is **awesome**!

- Feature 1
- Feature 2
- Feature 3

> "Innovation distinguishes between a leader and a follower." – Steve Jobs
`;

function Projects() {
  return (
    <div>
      <Project title="My Cool Project" markdownContent={sampleMarkdown} />
    </div>
  );
}

export default Projects;
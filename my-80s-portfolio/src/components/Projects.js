import React from 'react';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        From lab automation to ROS2 side explorations, here are a few highlights of my work.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Project 1 */}
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
          <h3>Lab Automation: Micro Pipetting Robot</h3>
          <p>
            A small-scale robot designed to automate pipetting tasks. It’s my stepping stone to 
            fully integrated lab workflows.
          </p>
          <a
            href="https://github.com/simoncoelho/lab-automation-bot"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
          <h3>ROS2 Exploration</h3>
          <p>
            Experimenting with ROS2 for next-gen robotics. 
            This is where I test new modules and communication protocols.
          </p>
          <a
            href="https://github.com/simoncoelho/ros2-experiments"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
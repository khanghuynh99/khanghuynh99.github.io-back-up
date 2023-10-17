import React, { Component } from 'react';
import '../styles/About.css';

export default class About extends Component {
  render() {
    const one = (
      <p>
        I am currently a <b>Software Development Engineer</b> at UPS, working under the API Development team. At the same time, I am currently applying for graduate schools.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in making side projects and expanding my personal skill set. I also play a lot of video games and practice Brazilian Ju-Jitsu.
      </p>
    );
    const three = (
      <p>
        Want to chat? Shoot me a message and let's talk.
      </p>
    );

    const tech_stack = [
      'Javascript ES6+',
      'Java',
      'Python',
      'Node.js',
      'HTML & CSS',
    ];

    return (
      <div id="about">
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-description">
          {one}
          <p>Here are some technologies I have been working with:</p>
          <ul className="tech-stack">
            {tech_stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          {two}
        </div>
        {three}
      </div>
    );
  }
}

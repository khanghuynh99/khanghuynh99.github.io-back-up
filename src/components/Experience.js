import React, { Component } from 'react'
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";
import "../styles/Experience.css";

export default class Experience extends Component {
  render() {
    return (
      <div id = "experience">
        <FadeInSection>
        <div className = "section-header">
            <span className="section-title">/ experience</span>
        </div>
        <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

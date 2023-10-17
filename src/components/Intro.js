import React, { Component } from 'react'

import "../styles/Intro.css";
import FractalTree from './FractalTree';
import { Typewriter } from 'react-simple-typewriter';

class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <span className="intro-title">
          {"hi, "}
          <span className="intro-name"> {"khang"}</span>
          {" here."}
          </span>
          <div className="intro-subtitle"> I like making stuff.</div>
          <div className="intro-desc">
            I'm a software engineer based in Atlanta, GA. I have great
            interest in full-stack development, artificial intelligence,
            human-computer interactions, and everything in between.
          </div>
      </div>
    )
  }
}

export default Intro;
import React from 'react';
import SectionTitle from '../section_title/section_title';
import MeImg from '../../assets/me.jpg'
import './about.css';

const aboutBlurbs = ['Hello there!',
'I\'m Justin Santos — a graduate student, software engineer, and lover of technology. There are more tools at our disposal than any other time in human history; my goal is to utilize today\'s tools to solve tomorrow\'s problems.',
'My academic and professional interests include data and algorithm visualization, artificial intelligence, and machine learning.',
'Outside of the realm of computer science, I enjoy drinking boba, occasionally working out, and playing video games (osu! is my favorite at the moment). ']

class About extends React.Component {
  render() {
    return (
      <div className="about section-wrapper" id="about">
        <SectionTitle sectionName="about" />
        <div className="about-main-section">
          <div className="about-text-wrapper">
          { aboutBlurbs.map((value, index) => (<div key={index} className="about-text">{value}</div>)) }
          </div>
          <img alt="me" src={MeImg}></img>
        </div>
      </div>
    )
  }
}

export default About

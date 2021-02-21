import React from 'react';
import SectionTitle from '../section_title/section_title';
import EducationPanel from './education_panel/education_panel';
import CourseworkPanel from './coursework_panel/coursework_panel';
import './education.css';

const mastersProps = {
  university: 'The University of Oklahoma',
  degree: 'M.Sc. Computer Science',
  misc: ['August 2020 - May 2021 (expected)', '4.00/4.00 GPA'],
  imgPath: '../../assets/ou-logo.svg'
}

const bachelorsProps = {
  university: 'The University of Oklahoma',
  degree: 'B.Sc. Computer Science, summa cum laude',
  misc: ['August 2017 - May 2020', 'Minor in Mathematics', '3.91/4.00 GPA'],
  imgPath: '../../assets/ou-logo.svg'
}

const oxfordProps = {
  university: 'The University of Oxford, Brasenose College',
  degree: 'Study Abroad',
  misc: ['Summer 2018'],
  imgPath: '../../assets/oxford-logo.png'
}

const coursework = ["artificial intelligence",
  "machine learning",
  "deep learning",
  "neural networks",
  "parallel and distributed programming",
  "applied statistics",
  "robotics",
  "algorithms",
  "data structures",
  "object-oriented programming",
  "software engineering",
  "databases",
  "cryptography",
  "computer security",
  "computer graphics",
  "human-computer interaction",
  "theory of computation",
  "operating systems",
  "programming language theory",
  "computer organization",
  "computer architecture",
]

class Education extends React.Component {
  render() {
    return (
      <div className='education section-wrapper' id='education'>
        <SectionTitle sectionName='education' />
        <div className="education-main-section">
          <div className="edu-wrapper">
            <EducationPanel className="edu-panel" { ...mastersProps } />
            <EducationPanel className="edu-panel" { ...bachelorsProps } />
            <EducationPanel className="edu-panel" { ...oxfordProps } />
          </div>
          <div className="coursework-wrapper">
            <CourseworkPanel className="coursework-panel" coursework = { coursework } />
          </div>
        </div>
      </div>
    )
  }
}

export default Education

import React from 'react';
import BlinkingUnderscore from '../blinking_underscore/blinking_underscore';
import './section_title.css';

class SectionTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='section-title'>>justin.<span className='syntax-highlight'>{ this.props.sectionName }</span>()<BlinkingUnderscore /></div>
      </>
    )
  }
}

export default SectionTitle

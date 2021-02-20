import React from 'react';
import SectionTitle from '../section_title/section_title';
import './contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className='contact section-wrapper' id='contact'>
        <SectionTitle sectionName='contact' />
      </div>
    )
  }
}

export default Contact

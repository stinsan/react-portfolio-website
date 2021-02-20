import React from 'react';

class CourseworkPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div> Coursework: </div>
        <ul className="coursework-list">
          { this.props.coursework.map((value, index) => (<li key={index} className="coursework">{value}</li>)) }
        </ul>
      </>
    )
  }
}

export default CourseworkPanel

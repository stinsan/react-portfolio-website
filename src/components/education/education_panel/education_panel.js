import React from 'react';

class EducationPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = { this.props.className }>
        <img alt="uni-img" src={ this.props.imgPath }></img>
        <div className="edu-text">
          <div>{ this.props.university } | { this.props.degree }</div>
          <div>
            { this.props.misc.map((value, index) => (<p key={index} className="edu-misc">{value}</p>)) }
          </div>
        </div>
      </div>
    )
  }
}

export default EducationPanel

import React from 'react';

class BlinkingUnderscore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      underscore: '',
    }
  }

  componentDidMount() {
    this.blinkingUnderscoreHandler();
  }

  blinkingUnderscoreHandler = () => {
    const { underscore } = this.state;
    this.setState({underscore: underscore === '_' ? '' : '_'})
    setTimeout(this.blinkingUnderscoreHandler, 500);
  }

  render() {
    return (
      <span>{this.state.underscore}</span>
    )
  }
}

export default BlinkingUnderscore

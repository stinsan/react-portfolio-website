import React from 'react';
import SocialMediaButtons from './social_media_buttons'
import './title_page.css'

class TitlePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isTyping: false,
      underscore: '',
      showSyntaxHighlight: false,
    }
  }

  componentDidMount() {
    const onLoadTypingDelay = 1500;
    setTimeout(this.typingHandler, onLoadTypingDelay);
    this.blinkingUnderscoreHandler();
  }

  typingHandler = () => {
    const justinsantosText = 'justinsantos';
    const midNameTypingDelay = 2250;
    const typingDelay = 125;
    const { text, isTyping } = this.state;

    this.setState({
      text: justinsantosText.substring(0, text.length + 1)
    });

    if (text.length === 5) {
      this.setState({isTyping: false})
      setTimeout(this.typingHandler, midNameTypingDelay);
    } else if (text.length === justinsantosText.length) {
      this.setState({isTyping: false})
      setTimeout(() => {this.setState({showSyntaxHighlight: true})}, 500)
      return
    } else {
      this.setState({isTyping: true})
      setTimeout(this.typingHandler, typingDelay);
    }
  };

  blinkingUnderscoreHandler = () => {
    const blinkInterval = 500;
    const { text, isTyping, underscore } = this.state;

    if (isTyping) {
      this.setState({underscore: '_'})
    } else {
      this.setState({underscore: underscore === '_' ? '' : '_'})
    }

    setTimeout(this.blinkingUnderscoreHandler, blinkInterval);
  }

  render() {
    const showSyntaxHighlight = this.state.showSyntaxHighlight;
    let titlePageText;

    if (!showSyntaxHighlight) {
      titlePageText = <><span>{ this.state.text }</span><span>{ this.state.underscore }</span></>;
    } else {
      let ju = this.state.text.substring(0, 2)
      let stinsan = this.state.text.substring(2, 9)
      let tos = this.state.text.substring(9, 12)
      titlePageText = <><span>{ ju }</span><span className="syntax-highlight">{ stinsan }</span><span>{ tos }</span><span>{ this.state.underscore }</span></>;
    }

    return (
      <div className="title-wrapper" id="home">
        <div className="title">
          <span>>{titlePageText}</span>
        </div>
        <div className="subtitle">
          <p>Graduate Computer Science Student</p>
          <p>at</p>
          <p>The University of Oklahoma</p>
        </div>
        <SocialMediaButtons />
      </div>
    );

  }
}

export default TitlePage;

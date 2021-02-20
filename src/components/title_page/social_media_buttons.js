import React from 'react';
import buttons from './social_media_button_data';
import './social_media_buttons.css';
import { Icon } from '@iconify/react';
import leetcodeIcon from '@iconify/icons-simple-icons/leetcode';

class SocialMediaButtons extends React.Component {
  render() {
    let elements = []
    for (const button of buttons) {
      elements.push(<li><a href={ button.href } target="_blank"><i className={ button.icon }></i></a></li>)
    }

    return (
        <ul className='social-media-buttons'>
          {elements}
        </ul>
    )
  }
}

export default SocialMediaButtons;

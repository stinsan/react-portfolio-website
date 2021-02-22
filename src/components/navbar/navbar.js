import React, {useState} from 'react';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import './navbar.css'

import Resume from '../../assets/documents/JustinSantosResume.pdf';

class MyButton {
  constructor(name, href) {
    this.name = name
  }
}

class Navbar extends React.Component {
  getNavbarButtons = () => {
    const buttons = [new MyButton('home'),
      new MyButton('about'),
      new MyButton('projects'),
      new MyButton('education')]

    return buttons.map((btn) => {
      return <Link key={btn.name} to={btn.name} smooth={true} duration={1000}><Button className="navbar-btn">{btn.name}</Button></Link>
    })
  }

  render() {
    return (
      <>
        <div className="navbar-container">
          {this.getNavbarButtons()}
          <Button href={Resume} className="navbar-btn">résumé</Button>
        </div>
      </>
    );
  }
}

export default Navbar;

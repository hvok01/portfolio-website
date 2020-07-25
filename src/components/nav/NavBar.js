import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../styles/globals.css";
import "../../styles/nav/nav.css";
import Logo from '../../assets/icons/Logo';
import Hamburger from "../../assets/icons/Hamburger";
import HamburgerBlack from "../../assets/icons/HamburgerBlack";
import Close from "../../assets/icons/Close";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.color = props.color;
    this.logo = React.createRef();
    this.hamburger = React.createRef();
    this.close = React.createRef();
    this.navLinksContainer = React.createRef();
    this.headerContainer = React.createRef();
    this.logoHidden = React.createRef();
  }

  toogleNavBar() {
    this.logoHidden.current.style.display = 'block';
    this.logo.current.style.display = 'none';
    this.close.current.style.display = 'block';
    this.hamburger.current.style.display = 'none';
    this.navLinksContainer.current.style.display = 'block';
    this.headerContainer.current.style.height = '100vh';
    this.headerContainer.current.style.position = 'fixed';
    this.headerContainer.current.style.backgroundColor = '#0C0C0C';
  }

  closeNavBar() {
    this.logoHidden.current.style.display = 'none';
    this.logo.current.style.display = 'block';
    this.close.current.style.display = 'none';
    this.hamburger.current.style.display = 'block';
    this.navLinksContainer.current.style.display = 'none';
    this.headerContainer.current.style.height = '10vh';
    this.headerContainer.current.style.position = 'relative';
    this.headerContainer.current.style.backgroundColor = 'transparent';
  }

  render() {
    return (
      <header className="header-nav-container" ref={this.headerContainer}>
        
        <div className="logo-container" ref={this.logo}>
          {
            this.color === "black" ? <Logo color="black"/> : <Logo color="white"/>
          }
        </div>
        <div className="logo-container-hidden" ref={this.logoHidden}>
          <Logo color="white"/>
        </div>
        <div className="hamburger-container" ref={this.hamburger} onClick={() => this.toogleNavBar()}>
          {
            this.color === "black" ? <HamburgerBlack /> : <Hamburger />
          }
        </div>
        <div className="close-container" ref={this.close} onClick={() => this.closeNavBar()}>
          <Close />
        </div>
        <nav className="nav-links-container" ref={this.navLinksContainer}>
          <ul>
            <li>
              <Link to="/" className="nav-links-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="nav-links-item">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-links-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;

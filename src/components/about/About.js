import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import '../../styles/about/about.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { gsap } from "gsap/dist/gsap";

class About extends Component {

    constructor(props) {
        super(props);
        this.aboutMainText = React.createRef();
        this.aboutGithub = React.createRef();
        this.aboutDribble = React.createRef();
        this.aboutContactButton = React.createRef();
    }

    componentDidMount() {
        gsap.from(this.aboutMainText.current, {
            duration: 2,
            x: -100,
            opacity: 0,
            ease: "power4.out",
        });
        gsap.from(
          this.aboutGithub.current,
          { duration: 1, x: -50, opacity: 0, delay: 0.5 },
          "-=1"
        );
        gsap.from(
          this.aboutDribble.current,
          { duration: 1, x: -50, opacity: 0, delay: 0.8 },
          "-=2"
        );
        gsap.from(
          this.aboutContactButton.current,
          { duration: 2, opacity: 0, delay: 1 },
          "-=1"
        );
    }

    render() {
        return (
            <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <NavBar color="black"/>
            <div className='grid-container'>
                <main className='about-section-container'></main>
                <div className='about-section' ref={this.aboutMainText}>
                    <h1 className='about-section-text'>Hey!. My name is Leo, i'm current living in San Luis Argentina, i'm 21 and i'm a frontend developer. <br />
                I'm about to graduate from La Punta University as a technician in software development and i'm working on improve my skills and learns as much as i can of this incredible world of 'web development'. <br />
                Right now i'm working a lot with html, css, JavaScript, React.js, Sass, Webpack, Babel, and also another technologies.</h1>
                </div>
                <div className="grid-line-1-a"></div>
                <div className="grid-line-2-a"></div>
                <div className="grid-line-3-a"></div>
                <div className="grid-line-4-a"></div>
                <div className="grid-line-5-a"></div>

                <div className="about-contact-button" ref={this.aboutContactButton}>
                    <Link to="/contact" className="button">contact</Link>
                </div>

                <div className="about-github" ref={this.aboutGithub}>
                    <Link to={{ pathname: "https://github.com/hvok01" }} target="_blank" className="about-contact-button-2">Github</Link>
                </div>

                <div className="about-dribble" ref={this.aboutDribble}>
                    <Link to={{ pathname: "https://dribbble.com/leo01" }} target="_blank" className="about-contact-button-2">Dribble</Link>
                </div>
            </div>
            </>
        )
    }
}

export default About;

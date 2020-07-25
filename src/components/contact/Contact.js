import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import '../../styles/contact/contact.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { gsap } from "gsap/dist/gsap";

class Contact extends Component {

    constructor(props) {
        super(props)
        this.contactMainText = React.createRef();
        this.contactFormName = React.createRef();
        this.contactFormEmail = React.createRef();
        this.contactFormMessage = React.createRef();
        this.contactFormSend = React.createRef();
        this.contactGithub = React.createRef();
        this.contactDribble = React.createRef();
        this.contactBackToHome = React.createRef();
    }

    componentDidMount() {
        gsap.from(this.contactMainText.current, {
            duration: 2,
            x: -100,
            opacity: 0,
            ease: "power4.out",
        });
        gsap.from(this.contactFormName.current, {
            duration: 1,
            opacity: 0,
            delay: .3
        });
        gsap.from(this.contactFormEmail.current, {
            duration: 1,
            opacity: 0,
            delay: .5
        });
        gsap.from(this.contactFormMessage.current, {
            duration: 1,
            opacity: 0,
            delay: .8
        });
        gsap.from(this.contactFormSend.current, {
            duration: 2,
            opacity: 0,
            delay: 1.5
        });
        gsap.from(this.contactGithub.current, {
            duration: 1,
            opacity: 0,
            x: -50,
            delay: .5
        });
        gsap.from(this.contactDribble.current, {
            duration: 1,
            opacity: 0,
            x: -50,
            delay: .2
        });
        gsap.from(this.contactBackToHome.current, {
            duration: 1,
            opacity: 0,
            delay: 1
        });
    }

    render() {
        return (
            <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <NavBar color="black"/>
            <div className='grid-container'>
                <main className='about-section-container'></main>
                <div className='about-section' ref={this.contactMainText}>
                    <h1 className='about-section-text'>If you are interested in my job and want to ask something you can send me an email to lecofdesings2015@gmail.com or can complete this form :)</h1>
                </div>
                <div className="grid-line-1-a"></div>
                <div className="grid-line-2-a"></div>
                <div className="grid-line-3-a"></div>
                <div className="grid-line-4-a"></div>
                <div className="grid-line-5-a"></div>

                <div className="contact-form-container-page">
                    <form action="mailto:lecofdesings2015@gmail.com" method="post" encType="text/plain" className="contact-form">
                        <div className="input-name-container">
                            <input type="text" name="name" id="name" placeholder="Name:" className="contact-input-txt" ref={this.contactFormName} />
                            <input type="email" name="email" id="email" placeholder="Email:" className="contact-input-txt" ref={this.contactFormEmail} />
                            <div className="input-message-send-container">
                                <input type="text" name="message" id="message" placeholder="Message:" className="contact-input-txt" ref={this.contactFormMessage}/>
                                <input type="submit" value="Send ->" className="contact-button-enviar" ref={this.contactFormSend}/>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div className="contact-github" ref={this.contactGithub}>
                    <Link to={{ pathname: "https://github.com/hvok01" }} target="_blank">Github</Link>
                </div>

                <div className="contact-dribble" ref={this.contactDribble}>
                    <Link to={{ pathname: "https://dribbble.com/leo01" }} target="_blank">Dribble</Link>
                </div>
                
                <div className="goBackToHome-button" ref={this.contactBackToHome}>
                    <Link to="/">Go back to home</Link>
                </div>
            </div>
            </>
        )
    }
}

export default Contact;

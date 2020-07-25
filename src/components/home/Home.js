import React, { Component } from "react";
import "../../styles/home/home.css";
import Pintper from "../../assets/images/pintper.jpg";
import EstadoReal from "../../assets/images/EstadoReal.jpg";
import Texture from "../../assets/images/texture.png";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

class Home extends Component {
  constructor(props) {
    super(props);
    this.homeTitle = React.createRef();
    this.githubTitle = React.createRef();
    this.dribbleTitle = React.createRef();
    this.buttonMoreTitle = React.createRef();
    this.containerAboutLeft = React.createRef();
    this.containerAboutRight = React.createRef();
    this.dividerAbout = React.createRef();
    this.contactText = React.createRef();
    this.contactForm = React.createRef();
    this.footerText = React.createRef();
    this.footerYear = React.createRef();
    this.footerBtt = React.createRef();
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.homeTitle.current, {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });
    gsap.from(
      this.githubTitle.current,
      { duration: 1, x: -50, opacity: 0, delay: 0.5 },
      "-=1"
    );
    gsap.from(
      this.dribbleTitle.current,
      { duration: 2, x: -50, opacity: 0, delay: 0.5 },
      "-=2"
    );
    gsap.from(
      this.buttonMoreTitle.current,
      { duration: 1, opacity: 0, delay: 1 },
      "-=.5"
    );

    gsap.from(this.containerAboutLeft.current, {
      scrollTrigger: {
        trigger: this.containerAboutLeft.current,
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(this.containerAboutRight.current, {
      scrollTrigger: {
        trigger: this.containerAboutRight.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(this.dividerAbout.current, {
      scrollTrigger: {
        trigger: this.dividerAbout.current,
        toggleActions: "restart none none none",
        start: "bottom bottom",
      },
      x: -200,
      opacity: 0,
      duration: 1,
    });

    /* CONTACT SECTION */

    gsap.from(this.contactText.current, {
      scrollTrigger: {
        trigger: this.contactText.current,
        toggleActions: "play none none none",
        start: "top 80%",
      },
      x: -200,
      duration: 1,
      opacity: 0,
    });

    gsap.from(this.contactForm.current.children[0], {
      scrollTrigger: {
        trigger: this.contactForm.current.children[0],
        toggleActions: "play none none none",
        start: "top 70%",
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(this.contactForm.current.children[1], {
      scrollTrigger: {
        trigger: this.contactForm.current.children[1],
        toggleActions: "play none none none",
        start: "top 70%",
      },
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(this.contactForm.current.children[2], {
      scrollTrigger: {
        trigger: this.contactForm.current.children[2],
        toggleActions: "play none none none",
        start: "top 70%",
      },
      opacity: 0,
      duration: 1,
      delay: 0.4,
    });

    gsap.from(this.contactForm.current.children[3], {
      scrollTrigger: {
        trigger: this.contactForm.current.children[3],
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });

    /* FOOTER SECTION */

    gsap.from(this.footerText.current, {
      scrollTrigger: {
        trigger: this.footerText.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      duration: 2,
      opacity: 0,
    });

    gsap.from(this.footerYear.current, {
      scrollTrigger: {
        trigger: this.footerYear.current,
        toggleActions: "restart none none none",
        start: "top bottom",
      },
      duration: 2,
      opacity: 0,
      delay: 0.2,
    });

    gsap.from(this.footerBtt.current, {
      scrollTrigger: {
        trigger: this.footerBtt.current,
        toggleActions: "restart none none none",
        start: "top bottom",
      },
      duration: 2,
      opacity: 0,
      delay: 0.3,
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Leonel Gómez</title>
        </Helmet>
        <NavBar />
        <div className="grid-container" id="top">
          <main className="home-section-container"></main>
          <div className="home-section">
            <h1 className="home-section-text" ref={this.homeTitle}>
              Welcome :). I'm Leo <br />
              Frontend developer based in San Luis, Argentina.
            </h1>
          </div>
          <div className="grid-line-1"></div>
          <div className="grid-line-2"></div>
          <div className="grid-line-3"></div>
          <div className="grid-line-4"></div>
          <div className="grid-line-5"></div>

          <div className="home-section-banner" ref={this.buttonMoreTitle}>
            <Link to="/about" className="button-1">
              More
            </Link>
          </div>

          <div className="home-section-github" ref={this.githubTitle}>
            <Link
              to={{ pathname: "https://github.com/hvok01" }}
              target="_blank"
            >
              Github
            </Link>
          </div>

          <div className="home-section-dribble" ref={this.dribbleTitle}>
            <Link
              to={{ pathname: "https://dribbble.com/leo01" }}
              target="_blank"
            >
              Dribble
            </Link>
          </div>

          <div className="home-scroll-down"> </div>
        </div>

        <div className="home-about-section">
          <div className="about-main-text" ref={this.containerAboutLeft}>
            <h1>I like to create,</h1>
            <h1>learn,</h1>
            <h1>share</h1>
            <h1>and</h1>
            <h1>Lo-fi music.</h1>
          </div>
          <div className="about-divider" ref={this.dividerAbout}></div>
          <div className="about-main-text_2" ref={this.containerAboutRight}>
            <h1>I can build,</h1>
            <h1>design,</h1>
            <h1>develop,</h1>
            <h1>websites</h1>
            <h1>and apps.</h1>
          </div>
          <div className="about-button-2">
            <Link to="/contact">Get in touch!</Link>
          </div>
          <div className="about-box">
            <Link to="/about">Whoami?</Link>
          </div>

          <div className="about-backToTop">
            <HashLink to="/#top">Back to top</HashLink>
          </div>

          <div className="about-works">
            <div className="about-works-rotate">
              <HashLink to="/#middle">Work-&gt;</HashLink>
            </div>
          </div>
        </div>

        <div className="work-container" id="middle">
          <div className="work-header">
            <p>Pintper</p>
            <p>2020</p>
          </div>
          <div className="work-image-container">
            <Link to="/work" className="work-button">
              More
            </Link>
            <img src={Pintper} alt="pintper image" className="work-image" />
          </div>

          <div className="work-header-2">
            <p>Estado Real</p>
            <p>2019</p>
          </div>
          <div className="work-image-container-2">
            <Link to="/work" className="work-button">
              More
            </Link>
            <img
              src={EstadoReal}
              alt="estado real image"
              className="work-image"
            />
          </div>
        </div>

        <div className="contact-footer-container">
          <div className="contact-container">
            <div className="contact-text" ref={this.contactText}>
              <h1>Get in touch.</h1>
            </div>
            <div className="contact-form-container">
              <form
                action="mailto:lecofdesings2015@gmail.com"
                method="post"
                encType="text/plain"
                className="contact-form"
                ref={this.contactForm}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name:"
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email:"
                  className="contact-input"
                />
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Message:"
                  className="contact-input"
                />
                <input
                  type="submit"
                  value="Send ->"
                  className="contact-button"
                />
              </form>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-image-container">
              <img src={Texture} alt="placeholder-image" />
              <h1 ref={this.footerText}>K. Leonel Gomez Rodriguez</h1>
            </div>
            <div className="footer-2020-container" ref={this.footerYear}>
              <p>2020</p>
            </div>
            <div className="footer-back-to-top-container" ref={this.footerBtt}>
              <HashLink to="/#top">Back to top</HashLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

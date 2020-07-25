import React, { Component } from "react";
import NavBar from "../nav/NavBar";
import "../../styles/estadoReal/estadoReal.css";
import EstadoRealMainImage from "../../assets/images/EstadoReal.jpg";
import EstadoRealImage1 from "../../assets/images/estadoReal/EstadoReal-1.png";
import EstadoRealImage2 from "../../assets/images/estadoReal/EstadoReal-2.png";
import EstadoRealImage3 from "../../assets/images/estadoReal/EstadoReal-3.png";
import EstadoRealImage4 from "../../assets/images/estadoReal/EstadoReal-4.png";
import EstadoRealImage5 from "../../assets/images/estadoReal/EstadoReal-5.png";
import EstadoRealImage6 from "../../assets/images/estadoReal/EstadoReal-6.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

class EstadoReal extends Component {
  constructor(props) {
    super(props);
    this.slideIndex = 1;
    this.slidesContainer = React.createRef();
    this.mainText = React.createRef();
    this.githubProject = React.createRef();
    this.getInTouch = React.createRef();
    this.prevArrow = React.createRef();
    this.nextArrow = React.createRef();
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    let i;
    let slides = this.slidesContainer.current;
    let images = slides.children;
    if (n > images.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[this.slideIndex - 1].style.display = "block";
  }

  componentDidMount() {
    let slides = this.slidesContainer.current;
    let images = slides.children;
    images[0].style.display = "block";
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.mainText.current, {
      duration: 2,
      x: -100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(this.githubProject.current, {
      scrollTrigger: {
        trigger: this.githubProject.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      opacity: 0,
      duration: 1,
      delay: 1,
    });

    gsap.from(this.getInTouch.current, {
      scrollTrigger: {
        trigger: this.getInTouch.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(this.prevArrow.current, {
      scrollTrigger: {
        trigger: this.prevArrow.current,
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(this.nextArrow.current, {
      scrollTrigger: {
        trigger: this.nextArrow.current,
        toggleActions: "play none none none",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Estado Real</title>
        </Helmet>
        <NavBar />
        <div className="grid-container">
          <main className="works-section-background"></main>
          <div className="works-header-container">
            <div className="works-name">
              <p>Estado Real</p>
            </div>
            <div className="works-year">
              <p>2019</p>
            </div>
          </div>
          <div className="works-main-image">
            <img src={EstadoRealMainImage} alt="Estado Real image" />
          </div>
          <div className="works-main-text-container" ref={this.mainText}>
            <h2>
              Estado Real is a system for a ficticial real estate, this was a
              system that i develop by my own for an asignature in La Punta
              University. The main objective was to learn how to create an API
              and develop a system that uses CRUD. For this project i worked
              with C# and also the MVC pattern, i used Visual Studio Community.
              I decided to use html, css and C# so by this time i didn't know
              any framework but i designed everything and also did evert code
              line. I'm very proud with the result.
            </h2>
          </div>
        </div>
        <div className="works-gallery-container-grid">
          <div className="works-gallery-title">
            <h3>Gallery</h3>
          </div>
          <div className="works-gallery-previous" ref={this.prevArrow}>
            <span className="prev" onClick={() => this.plusSlides(-1)}>
              &lt;-
            </span>
          </div>
          <div className="works-gallery-next" ref={this.nextArrow}>
            <span className="next" onClick={() => this.plusSlides(1)}>
              -&gt;
            </span>
          </div>
          <div className="works-galery">
            <div className="works-galery-item" ref={this.slidesContainer}>
              <img src={EstadoRealImage1} alt="Estado Real image 1" />
              <img src={EstadoRealImage2} alt="Estado Real image 2" />
              <img src={EstadoRealImage3} alt="Estado Real image 3" />
              <img src={EstadoRealImage4} alt="Estado Real image 4" />
              <img src={EstadoRealImage5} alt="Estado Real image 5" />
              <img src={EstadoRealImage6} alt="Estado Real image 6" />
            </div>
          </div>
          <div className="works-galery-getInTouch" ref={this.getInTouch}>
            <Link to="/contact">Get in touch</Link>
          </div>
          <div className="works-galery-github-project" ref={this.githubProject}>
            <Link
              to={{ pathname: "https://github.com/hvok01/InmobEstadoReal" }}
              target="_blank"
            >
              Github project
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default EstadoReal;

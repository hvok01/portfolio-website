import React, { Component } from "react";
import NavBar from "../nav/NavBar";
import "../../styles/pintper/pintper.css";
import PintperMainImage from "../../assets/images/pintper.jpg";
import PintperImage1 from "../../assets/images/pintper/pintper-1.png";
import PintperImage2 from "../../assets/images/pintper/pintper-2.png";
import PintperImage3 from "../../assets/images/pintper/pintper-3.png";
import PintperImage4 from "../../assets/images/pintper/pintper-4.png";
import PintperImage5 from "../../assets/images/pintper/pintper-5.png";
import PintperImage6 from "../../assets/images/pintper/pintper-6.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

class Pintper extends Component {
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
          <title>Pintper</title>
        </Helmet>
        <NavBar />
        <div className="grid-container">
          <main className="works-section-background"></main>
          <div className="works-header-container">
            <div className="works-name">
              <p>Pintper</p>
            </div>
            <div className="works-year">
              <p>2020</p>
            </div>
          </div>
          <div className="works-main-image">
            <img src={PintperMainImage} alt="pintper image" />
          </div>
          <div className="works-main-text-container" ref={this.mainText}>
            <h2>
              Pintper allows users to get homemade beer from different local
              stores. A friend told me that he wanted to work with me so we did
              this project for practise and also to have a great, looking good
              project for our portfolio. For this project we use the model view
              controller pattern and we work with MySql as database. This
              project start in january of 2020 but because of the Coronavirus we
              wasn't able to finish it. Anyways we did a lot of progress and we
              hope to continue it in a near future.
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
              <img src={PintperImage1} alt="pintper image 1" />
              <img src={PintperImage2} alt="pintper image 2" />
              <img src={PintperImage3} alt="pintper image 3" />
              <img src={PintperImage4} alt="pintper image 4" />
              <img src={PintperImage5} alt="pintper image 5" />
              <img src={PintperImage6} alt="pintper image 6" />
            </div>
          </div>
          <div className="works-galery-getInTouch" ref={this.getInTouch}>
            <Link to="/contact">Get in touch</Link>
          </div>
          <div className="works-galery-github-project" ref={this.githubProject}>
            <Link
              to={{ pathname: "https://github.com/hvok01/PintPer" }}
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

export default Pintper;

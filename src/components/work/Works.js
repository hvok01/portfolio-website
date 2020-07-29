import React, { Component } from "react";
import NavBar from "../nav/NavBar";
import "../../styles/works/works.css";
import Pintper from "../../assets/images/pintper.jpg";
import EstadoReal from "../../assets/images/EstadoReal.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

class Works extends Component {
  constructor(props) {
    super(props);
    this.workPintperTitle = React.createRef();
    this.githubRepoPintper = React.createRef();
    this.githubRepoEstadoReal = React.createRef();
    this.workEstadoRealTitle = React.createRef();
    this.btt = React.createRef();
  }

  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.workPintperTitle.current, {
      duration: 2,
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    });

    gsap.from(this.githubRepoPintper.current, {
      duration: 1,
      opacity: 0,
      delay: 1,
    });

    gsap.from(this.workEstadoRealTitle.current, {
      scrollTrigger: {
        trigger: this.workEstadoRealTitle.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      x: -200,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(this.githubRepoEstadoReal.current, {
      scrollTrigger: {
        trigger: this.githubRepoEstadoReal.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      duration: 1,
      opacity: 0,
      delay: .5
    });

    gsap.from(this.btt.current, {
      scrollTrigger: {
        trigger: this.btt.current,
        toggleActions: "play none none none",
        start: "top bottom",
      },
      duration: 1,
      opacity: 0,
    });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Works</title>
        </Helmet>
        <NavBar />
        <div className="grid-container" id="top">
          <main className="works-section-container"></main>
          <div className="works-section">
            <h1 className="works-section-text">works</h1>
          </div>

          <div className="pintper-header">
            <div className="pintper-header-container">
              <p>Pintper</p>
            </div>
            <div className="pintper-header-2020">
              <p>2020</p>
            </div>
          </div>

          <div className="pintper-image-container">
            <img src={Pintper} alt="pintper image" />
          </div>

          <div className="pintper-text-container" ref={this.workPintperTitle}>
            <h2>
              Pintper allows users to get homemade beer from different local
              stores. A friend told me that he wanted to work with me so we did
              this project for practise and also to have a great, looking good
              project for our portfolio.
            </h2>
          </div>

          <div className="pintper-more">
            <Link to="/pintper">More</Link>
          </div>
          <div
            className="pintper-github-link-container"
            ref={this.githubRepoPintper}
          >
            <Link
              to={{ pathname: "https://github.com/hvok01/PintPer" }}
              target="_blank"
            >
              Github Repo
            </Link>
          </div>
        </div>

        <div className="estado-real-container">
          <div className="estado-real-header">
            <div className="estado-real-header-container">
              <p>Estado Real</p>
            </div>
            <div className="estado-real-header-2020">
              <p>2020</p>
            </div>
          </div>

          <div className="estado-real-image-container">
            <img src={EstadoReal} alt="Estado Real image" />
          </div>

          <div
            className="estado-real-text-container"
            ref={this.workEstadoRealTitle}
          >
            <h2>
              Estado Real is a system for a ficticial real estate, this was a
              system that i develop by my self for an asignature in La Punta
              University. The aim was to learn how to create an API
              and develop a system that uses CRUD.
            </h2>
          </div>

          <div className="estado-real-more">
            <Link to="/estadoReal">More</Link>
          </div>
          <div
            className="estado-real-github-link-container"
            ref={this.githubRepoEstadoReal}
          >
            <Link
              to={{ pathname: "https://github.com/hvok01/InmobEstadoReal" }}
              target="_blank"
            >
              Github Repo
            </Link>
          </div>

          <div className="backtotop-container" ref={this.btt}>
            <HashLink to="/work/#top">Back to top</HashLink>
          </div>
        </div>
      </>
    );
  }
}

export default Works;

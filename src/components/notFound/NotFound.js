import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import { Link } from 'react-router-dom';
import '../../styles/notFound/notFound.css';
import { Helmet } from 'react-helmet';
import { gsap } from "gsap/dist/gsap";

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.mainTitle = React.createRef();
        this.backToHome = React.createRef();
    }

    componentDidMount() {
        gsap.from(this.mainTitle.current, {
            duration: 2,
            opacity: 0,
        });
        gsap.from(this.backToHome.current, {
            duration: 2,
            opacity: 0,
            delay: .5
        });
    }

    render () {
        return (
            <>
            <Helmet>
                <title>Error: 404</title>
            </Helmet>
            <NavBar />
            <div className='grid-container'>
                <main className='works-section-container'></main>
                <div className='works-section' ref={this.mainTitle}>
                    <h1 className='works-section-text'>404: Page not found.</h1>
                </div>
                <div className='link-go-back-to-Home' ref={this.backToHome}>
                    <Link to='/'> Go back to home</Link>
                </div>
            </div>
            </>
        );
    }
    
};

export default NotFound;

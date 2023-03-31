import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import Features from "../Features";

export default function About() {
    return (
        <>
            <div className='hero-container' style ={{
                backgroundImage: `url("images/img-2.jpg")`
            }}>

                <h1>Find the perfect job with us!</h1>
                <p>At job crop, we believe everyone should have the opportunity to find the perfect job they are looking for
                    without going through countless pages of jobs. We are the only job-searching app that do you justice.</p>
            </div>
            <Features data-aos="fade-up" />
            <Footer />
        </>
    );
}
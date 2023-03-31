import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import {Button} from "./Button";

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id="features">
            <div className="container features">
                <div className="title" data-aos="fade-up">
                    <BsFillBookmarkStarFill color="red" size={45} />
                    <h2>Core Features</h2>
                    <p>
                        Before us, the Job Searching sector in the tech industry was still in the dark ages. It was the norm to
                        leave employees without a reply and finding your perfect matches was soo difficult. Searches were throwing
                        up irrelevant jobs for applicants.
                        With Job Crop, we've made job searching easy and redesigned the UI so you don't have to go through those drastic
                        long descriptions. We want to make applicants get their perfect job quicker than ever before. Answering a simple quiz will give you the best matches on our platform. These matches show up
                        on our completely redesigned UI making it much easier to have a look through your potential matches
                        and apply or skip the job. Can't wait to use it? <br />
                        <Button
                        className='login-button'
                        buttonStyle='secondary-button'
                        buttonSize='large'
                        onClick={console.log('hey')}
                        >
                        Try it now!
                        </Button>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;

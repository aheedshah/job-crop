import React from 'react';
import '../../App.css';
import './ForEmployers.css';
import Footer from "../Footer";

export default function ForEmployers() {
    return (
        <>
            <header>
                <h1>
                    We’ve re-invented how talented people find jobs in tech
                </h1>
                <p>
                    Job boards used to be dreadful. Job crop has transformed the process of searching and applying for jobs.
                </p>
            </header>

            <div className="container">
                <div className="box box-cyan box-push">
                    <h2>Reinventing jobs</h2>
                    <p>We’ve re-invented how talented people find jobs in tech. Our product has transformed the process
                        of searching and applying for jobs. Stand out to the talented applicant and find your best match
                        quicker.
                    </p>
                    <img src="images/icon-calculator.svg" alt="supervisor"/>
                </div>

                <div className="box box-red">
                    <h2>Company Builder</h2>
                    <p>
                        Stand out to top candidates looking at your job ad. We showcase your job ad like no other. Put in
                        details about your company and stand out to applicants. Highlight your culture, values, salary in
                        different sections and make the job ad truly your own.
                    </p>
                    <img src="images/icon-team-builder.svg" alt="supervisor"/>
                </div>

                <div className="box box-blue box-push">
                    <h2>Wont take too long to find</h2>
                    <p>Find the right applicant quickly and efficiently by posting your ads and getting matched
                    to the applicant who wants to work in the same role. Job Crop cuts all the bs aside and finds
                    the right person quickly.</p>
                    <img src="images/icon-supervisor.svg" alt="supervisor"/>
                </div>

                <div className="box box-orange">
                    <h2>Find the right person</h2>
                    <p>As every person is matched to their own preferences, you always will know that you have got the person
                    right for your role and who wants to work with the same tech stack as the role needs.</p>
                    <img src="images/icon-karma.svg" alt="supervisor"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

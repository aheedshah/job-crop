import React from 'react';
import './Matches.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Matches = () => {
    return(
        <>
            <table>
                <tbody>
                <tr>
                    <td>
                        <h2>ABC Company</h2>
                        <p><i>"We make people work"</i></p>
                    </td>
                    <td>
                        <h2>Software Engineer</h2>
                        <p>29/03/2023</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Company Mission</h3>
                        <p>Our mission is to make everyone in this world know their ABCs.</p>
                    </td>
                    <td>
                        <h3>Tech Stack</h3>
                        <span className="badge-match">HTML5</span>
                        <span className="badge-match">CSS3</span>
                        <span className="badge-match">JavaScript</span>
                        <span className="badge-match">React</span>
                        <span className="badge-unmatch">Java</span>
                        <span className="badge-unmatch">TailWind</span>
                        <span className="badge-unmatch">Jest</span>
                        <span className="badge-unmatch">Mocha</span>

                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Glassdoor Reviews</h3>
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                    </td>
                    <td>
                        <h3>Experience Required</h3>
                        <p>3 years experience in phonetics and alphabets with a degree in the same</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Company Benefits</h3>
                        <p>There's a lot of benefits like pensioners scheme, cycle to work, etc.</p>
                    </td>
                    <td>
                        <h3>Job Description</h3>
                        <p>This job is about teaching people their ABCs</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Company Values</h3>
                        <p>We unite and bring people together</p>
                     </td>
                    <td>
                        <h3>Job's Day to Day</h3>
                        <p>You'll be teaching students phonetics and alphabets.</p>
                    </td>
                </tr>
            </tbody>
        </table>
            Please note the above company is a made-up company and the information is not real. This is for demonstration purposes only.
            The matches an applicant has are shown in yellow while the ones they don't have are shown in grey. <br />
        <button className="button-next-job">Next Job</button>
        <Popup
            trigger={<button className="button-apply-now"> Apply Now </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> You found a match! </div>
                    <div className="content">
                        {' '}
                        We are happy that you found a match. Please continue on to the company's website to apply.{' '}
                    </div>
                    <div className="actions">
                        <Popup
                            trigger={<button className="button-apply-now"> Apply! </button>}
                            position="top center"
                            nested
                        >
        <span>
          This will redirect the user to the company's website to apply.
        </span>
                        </Popup>
                        <button
                            className="button-apply-now"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    </>
    )
}
export default Matches;
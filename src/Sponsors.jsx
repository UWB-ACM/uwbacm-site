import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Check from './images/others/check.svg';
import './styles/reset.scss';
import './styles/sponsor.scss';

const Sponsors = () => (
<>
    <Helmet>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700|Roboto" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href='./favicon.ico' />
        <title>UWB ACM - Sponsor</title>
    </Helmet>
    <>
        <div id="app">
            <button id="return-top" onClick={e => window.scrollTo(0, 0)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#607D8B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-up"
                >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </button>
            <div className="header">
                <div>
                    <h1>Sponsor UWB ACM</h1>
                    <Link to="/">← Back Home</Link>
                </div>
            </div>
            <div className="read-section read-section">
                <div className="read-section__center">
                    <h3>About UWB ACM</h3>
                    <p>
                        The University of Washington Bothell Association for Computing Machinery Chapter is the largest
                        STEM-oriented student organization on the UWB campus. Last year, we hosted over 30 events
                        (including a 100+ person Hackathon) and have contributed to multiple university projects such as
                        the redesigning of the Computer Science Labs. Our primary mission is to prepare students both
                        educationally and professionally for their transition into the tech industry. <br />
                        <br />
                        This year our goal is to continue to grow by hosting over 70 events and directly connecting
                        students with you, their future employers. We hope to establish relationships between your
                        company and our talented students. <br />
                        <br />
                        For more information about our organization email us at:<br />
                        <a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a>
                    </p>
                </div>
            </div>

            <div className="read-section read-section--gray uwb-acm-need">
                <div className="read-section__center">
                    <h3>What the UWB ACM Needs</h3>
                    <p>
                        With the chapter’s growth, we are seeking additional financial support from companies. <br />
                        <br />
                        You can help fuel the next generation of technology leaders through financial contributions and
                        mentorship. To understand how this relationship can benefit both our students and your
                        organization, please continue.
                    </p>
                </div>
            </div>

            <div className="read-section read-section">
                <div className="read-section__center">
                    <h3>How to Sponsor</h3>
                    <p>
                        Please contact us at <a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a> if you
                        are interested in sponsoring UWB ACM.
                    </p>
                </div>
            </div>

            <div className="read-section read-section--gray">
                <div className="read-section__center">
                    <h3>Types of Sponsorships</h3>
                    <p>
                        This section describes the different levels of sponsorship your company can give and their
                        associated benefits. <br />
                        <br />
                        Our team has carefully selected each sponsorship tier to accurately represent what we need to
                        accomplish our goals. However, we will be happy to work with you to build a package tailored for
                        your organization. To get started please email us at:
                        <a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a>.
                    </p>
                </div>
            </div>
            <div className="read-section read-section--gray read-section--hack-images">
                <div className="read-section__center">
                    <img src="../images/sponsor/hackathon_1.jpg" alt="" />
                    <img src="../images/sponsor/hackathon_2.jpg" alt="" />
                    <img src="../images/sponsor/hackathon_3.jpg" alt="" />
                    <img src="../images/sponsor/hackathon_4.jpg" alt="" />
                    <img src="../images/sponsor/hackathon_5.jpg" alt="" />
                    <img src="../images/sponsor/hackathon_6.jpg" alt="" />
                </div>
            </div>
            <div className="read-section read-section--gray">
                <div className="read-section__center">
                    <h4>Signature Event Sponsorship: Hackathon</h4>
                    <p>
                        Become part of our Spring Annual Hackathon, a 14+ hour event where students can demonstrate
                        their talent and creativity by developing impressive projects in one day. Last year, we saw over
                        100 students and 20 volunteers participate. These students learned how to leverage open source
                        tools and online API’s to collaborate on innovative projects. <br />
                        <br />
                        By sponsoring UWB ACM’s signature event, your company will have the ability to interact directly
                        with students. <br />
                        <br />
                        <a 
                            target="_blank"
                            rel="noopener noreferrer" 
                            href="https://www.uwb.edu/news/june-2018/hackathon"
                            >View last year’s hackathon</a
                        >
                    </p>
                </div>
                <div className="pricing-table__wrapper">
                    <table className="pricing-table">
                        <tbody>
                            <tr className="pricing-table__header">
                                <th><h2>Sponsor Tiers</h2></th>
                                <th>
                                    <div><span style={{color: '#795548'}}>Copper</span> <span>$1000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#FFA726'}}>Bronze</span> <span>$2,000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#9baab2'}}>Silver</span> <span>$5,000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#FFC107'}}>Gold</span> <span>$10,000</span></div>
                                </th>
                            </tr>
                            <tr className="pricing-table__subtitle">
                                <td colSpan="5"><span>Recruitment</span></td>
                            </tr>
                            <tr>
                                <td>Distribute Recruiting Material</td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Access Resumes</td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Send Recruiters</td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Table at Workshop</td>
                                <td></td>
                                <td>Half</td>
                                <td>Full</td>
                                <td>2-Full</td>
                            </tr>
                            <tr className="pricing-table__subtitle">
                                <td colSpan="5"><span>Branding</span></td>
                            </tr>
                            <tr>
                                <td>Handout Swag</td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Logo on Website</td>
                                <td>Small</td>
                                <td>Small</td>
                                <td>Medium</td>
                                <td>Large</td>
                            </tr>
                            <tr>
                                <td>Logo on T-Shirt</td>
                                <td></td>
                                <td>Small</td>
                                <td>Medium</td>
                                <td>Large</td>
                            </tr>
                            <tr>
                                <td>Logo on Advertisement</td>
                                <td></td>
                                <td></td>
                                <td>Medium</td>
                                <td>Large</td>
                            </tr>
                            <tr>
                                <td>Host a Meal</td>
                                <td></td>
                                <td></td>
                                <td>1 Meal</td>
                                <td>2 Meals</td>
                            </tr>
                            <tr>
                                <td>Speak at Ceremony</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr className="pricing-table__subtitle">
                                <td colSpan="5"><span>General</span></td>
                            </tr>
                            <tr>
                                <td>Provide Prizes</td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Provide Mentor</td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Promote API & Product Demos</td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Provide a Judge</td>
                                <td></td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr className="pricing-table__footer">
                                <td colSpan="5">Please contact us to arrange a customized sponsorship package</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="read-section event-sponsorship">
                <div className="read-section__center">
                    <h3>Event Sponsorships</h3>
                    <p>
                        UWB ACM offers workshops on a variety of topics. Contributing to one of these workshops is a
                        great way to connect with students that are passionate in a specific area. Your support can also
                        foster future interest in this topic across the University. <br />
                        <br />
                        Benefits for event sponsorships vary on a case-by-case basis depending on the style of the
                        event. In general, they will consist of:
                    </p>
                    <ul>
                        <li>Logo placement on all event advertisements</li>
                        <li>Providing input on workshop curriculum</li>
                        <li>Bringing in a guest lecturer</li>
                        <li>Additional custom benefits</li>
                    </ul>
                    <p>The following is carefully selected list of our events that best suit an event sponsorship.</p>
                    <div className="signature-event">
                        <div className="signature-event__split">
                            <span>Cracking the Coding Interview Workshop</span> <span>$2,000</span>
                        </div>
                        <p>
                            The Weekly CTCI Workshop is an opportunity for students to collaborate with one another to
                            solve technical questions in a mock interview fashion. Students can use this opportunity to
                            prepare for their upcoming technical interviews.
                        </p>
                        <div className="signature-event__split">
                            <span>Internet of Things Crash Course</span> <span>$1,000</span>
                        </div>
                        <p>
                            The Weekly IoT Crash Course is an opportunity for students to gain experience with embedded
                            systems through hands on learning with micro controllers, sensors, motors and connectivity
                            to eventually build their own final project.
                        </p>
                    </div>
                </div>
            </div>
            <div className="read-section read-section--gray">
                <div className="read-section__center">
                    <h3>Seed Sponsorships</h3>
                    <p>
                        This year the ACM is hosting over 75 events and although our team has made extensive plans for
                        the year, there is still much that we would like to do. By becoming a Seed Sponsor, you are
                        helping our organization grow in new and exciting ways.
                    </p>
                </div>
                <div className="pricing-table__wrapper">
                    <table className="pricing-table">
                        <tbody>
                            <tr className="pricing-table__header">
                                <th><h2>Sponsor Tiers</h2></th>
                                <th>
                                    <div><span style={{color: '#795548'}}>Seed</span> <span>$1000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#FFA726'}}>Sapling</span> <span>$5,000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#9baab2'}}>Tree</span> <span>$10,000</span></div>
                                </th>
                                <th>
                                    <div><span style={{color: '#FFC107'}}>Oak</span> <span>$15,000</span></div>
                                </th>
                            </tr>
                            <tr>
                                <td>Logo on Website</td>
                                <td>Small</td>
                                <td>Small</td>
                                <td>Medium</td>
                                <td>Large</td>
                            </tr>
                            <tr>
                                <td>Bring in a Guest Speaker</td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Distribute Recruiting Material</td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Future Event Consultation</td>
                                <td></td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Logo on Event Posters</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr>
                                <td>Hackathon Gold Sponsorship</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><img src={Check} alt="Check Mark" /></td>
                            </tr>
                            <tr className="pricing-table__footer">
                                <td colSpan="5">Please contact us to arrange a customized sponsorship package</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>    
</>
);

export default Sponsors;

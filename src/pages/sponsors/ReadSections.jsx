import React from 'react';

import HackathonSponsorshipTable from './tables/HackathonSponsorshipTable';
import SeedSponsorshipTable from './tables/SeedSponsorshipTable';
import ReadSection from './ReadSection';

const ReadSections = () => (
	<>
		<ReadSection>
			<h3>About UWB ACM</h3>
			<p>
				The University of Washington Bothell Association for Computing Machinery Chapter is the largest STEM-oriented
				student organization on the UWB campus. Last year, we hosted over 30 events (including a 100+ person Hackathon)
				and have contributed to multiple university projects such as the redesigning of the Computer Science Labs. Our
				primary mission is to prepare students both educationally and professionally for their transition into the tech
				industry. <br />
				<br />
				This year our goal is to continue to grow by hosting over 70 events and directly connecting students with you,
				their future employers. We hope to establish relationships between your company and our talented students.{' '}
				<br />
				<br />
				For more information about our organization email us at:
				<br />
				<a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a>
			</p>
		</ReadSection>

		<ReadSection className="uwb-acm-need" gray>
			<h3>What the UWB ACM Needs</h3>
			<p>
				With the chapter’s growth, we are seeking additional financial support from companies. <br />
				<br />
				You can help fuel the next generation of technology leaders through financial contributions and mentorship. To
				understand how this relationship can benefit both our students and your organization, please continue.
			</p>
		</ReadSection>

		<ReadSection>
			<h3>How to Sponsor</h3>
			<p>
				Please contact us at <a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a> if you are interested in
				sponsoring UWB ACM.
			</p>
		</ReadSection>

		<ReadSection>
			<h3>Types of Sponsorships</h3>
			<p>
				This section describes the different levels of sponsorship your company can give and their associated benefits.{' '}
				<br />
				<br />
				Our team has carefully selected each sponsorship tier to accurately represent what we need to accomplish our
				goals. However, we will be happy to work with you to build a package tailored for your organization. To get
				started please email us at:
				<a href="mailto:acmuwbothell@gmail.com">acmuwbothell@gmail.com</a>.
			</p>
		</ReadSection>
		<ReadSection className="read-section--hack-images" gray>
			<img src={require('../../images/sponsor/hackathon_1.jpg')} alt="" />
			<img src={require('../../images/sponsor/hackathon_2.jpg')} alt="" />
			<img src={require('../../images/sponsor/hackathon_3.jpg')} alt="" />
			<img src={require('../../images/sponsor/hackathon_4.jpg')} alt="" />
			<img src={require('../../images/sponsor/hackathon_5.jpg')} alt="" />
			<img src={require('../../images/sponsor/hackathon_6.jpg')} alt="" />
		</ReadSection>

		<ReadSection gray table={<HackathonSponsorshipTable />}>
			<h4>Signature Event Sponsorship: Hackathon</h4>
			<p>
				Become part of our Spring Annual Hackathon, a 14+ hour event where students can demonstrate their talent and
				creativity by developing impressive projects in one day. Last year, we saw over 100 students and 20 volunteers
				participate. These students learned how to leverage open source tools and online API’s to collaborate on
				innovative projects. <br />
				<br />
				By sponsoring UWB ACM’s signature event, your company will have the ability to interact directly with students.{' '}
				<br />
				<br />
				<a target="_blank" rel="noopener noreferrer" href="https://www.uwb.edu/news/june-2018/hackathon">
					View last year’s hackathon
				</a>
			</p>
		</ReadSection>

		<ReadSection className="event-sponsorship">
			<h3>Event Sponsorships</h3>
			<p>
				UWB ACM offers workshops on a variety of topics. Contributing to one of these workshops is a great way to
				connect with students that are passionate in a specific area. Your support can also foster future interest in
				this topic across the University. <br />
				<br />
				Benefits for event sponsorships vary on a case-by-case basis depending on the style of the event. In general,
				they will consist of:
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
					The Weekly CTCI Workshop is an opportunity for students to collaborate with one another to solve technical
					questions in a mock interview fashion. Students can use this opportunity to prepare for their upcoming
					technical interviews.
				</p>
				<div className="signature-event__split">
					<span>Internet of Things Crash Course</span> <span>$1,000</span>
				</div>
				<p>
					The Weekly IoT Crash Course is an opportunity for students to gain experience with embedded systems through
					hands on learning with micro controllers, sensors, motors and connectivity to eventually build their own final
					project.
				</p>
			</div>
		</ReadSection>

		<ReadSection gray table={<SeedSponsorshipTable />}>
			<h3>Seed Sponsorships</h3>
			<p>
				This year the ACM is hosting over 75 events and although our team has made extensive plans for the year, there
				is still much that we would like to do. By becoming a Seed Sponsor, you are helping our organization grow in new
				and exciting ways.
			</p>
		</ReadSection>
	</>
);

export default ReadSections;
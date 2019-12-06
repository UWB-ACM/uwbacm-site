import React from 'react';

const Officer = ({name, position, desc, img, linkedIn, github}) => (
	<div className="officer">
		<div className="officer__avi-container">
			<img src={require(`../../images/officers/${img}.jpg`)} alt={`${name}'s Avatar`} />
		</div>
		<h3>{name}</h3>
		<h4>{position}</h4>
		<div className="officer__hidden">
			<p>{desc}</p>
			<div className="officer__social">
				<a
					className="social__linkedin"
					target="_blank"
					rel="noopener noreferrer"
					href={`https://www.linkedin.com/in/${linkedIn}/`}
					title={`${name} on LinkedIn`}
				>
					<img src={require('../../images/logos/media/linkedin-social.svg')} alt="LinkedIn logo" />
				</a>
				{github && (
					<a
						className="social__github"
						target="_blank"
						rel="noopener noreferrer"
						href={`https://github.com/${github}`}
						title={`${github} on GitHub`}
					>
						<img src={require('../../images/logos/media/github-social.svg')} alt="GitHub Logo" />
					</a>
				)}
			</div>
		</div>
	</div>
);

const Officers = () => (
	<div id="officers" className="center-div">
		<h2>Officers</h2>
		<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/forms/Xt3mg9rXPWkGDdx93">
			Apply to become an officer!
		</a>
		<div id="officers__list">
			{/* Row 1  */}
			<div className="row">
				<Officer
					name="Hannah Sokol"
					position="Chair"
					desc="Hannah is a Junior studying Computer Science and Software Engineering. She is interested in
					Cybersecurity and is also a member of the UW Women's Water Polo Team."
					img="avi-hannah"
					linkedIn="hannahksokol"
					github="hsokol8"
				/>
				<Officer
					name="Phuc Huynh"
					position="Vice Chair"
					desc="Phuc is a Junior studying Computer Software Engineering. He's interested in 
					software engineering, machine learning, and AI. In his spare time, he enjoys hiking and playing 
					piano."
					img="avi-billy"
					linkedIn="phuchuynhvu"
					github="Phuc15"
				/>
				<Officer
					name="Lizzy Presland"
					position="Chief Technology Officer"
					desc="Lizzy is a Junior studying Computer Science and Software Engineering. She is interested in 
					interdisciplinary research and creative applications of CS paradigms."
					img="avi-lizzy"
					linkedIn="etcadinfinitum"
					github="etcadinfinitum"
				/>
			</div>
			{/* Row 2s  */}
			<div className="row row-odd">
				<Officer
					name="Katie Yamabe"
					position="Secretary"
					desc="Katie is a sophomore pursuing an undergraduate degree in Business Administration and Management at UW Bothell."
					img="avi-katie"
					linkedIn="kathryn-yamabe"
					github=""
				/>
				<Officer
					name="Alex van Zuiden-Rylander"
					position="Treasurer"
					desc="Alex is a senior pursuing a degree in Computer Science and Software Engineering. His love for learning keeps him curious and constantly exploring new things."
					img="avi-alex"
					linkedIn="alexhvzr"
					github="alexhvzr"
				/>
			</div>
			{/* Row 3  */}
			<div className="row">
				{/* Officer went here/> */}
				<Officer
					name="Patrick O'Brien"
					position="Officer"
					desc="Patrick is a Junior at UWB studying Applied Computing and Interactive Media Design. His continuing
					mission: understand the universe and the nature of intelligence."
					img="avi-pat"
					linkedIn="patj"
					github="cforcomputer"
				/>
				<Officer
					name="Michele Chao"
					position="Web Developer"
					desc="Michele is a sophomore studying Interactive Media Design at UW Bothell. She's interested in
					integrating UX/UI design with her minor, geography."
					img="avi-michele"
					linkedIn="michele-chao-68b86a141"
					github="michelechao"
				/>
				<Officer
					name="Prathyusha Pillari"
					position="Officer"
					desc="Prathyusha (Prat) is a Junior at UWB studying Computer Science and Software Engineering. She 
					is also the founding president of the UWB chapter of Her Campus Media."
					img="avi-prat"
					linkedIn="prathyusha-pillari-0b2114b7"
					github="pratpill"
				/>
			</div>
			<div className="row row-odd">
				<Officer
					name="Jacob Anderson"
					position="Officer"
					desc="Jacob is a senior in the Computer Science and Software Engineering major with a minor in 
					Information Assurance and Cybersecurity. In his free time you can find him hiking or skiing 
					local mountains. He's also a residential advisor for UW Bothell's on campus housing"
					img="avi-jacob"
					linkedIn="jacob-r-anderson/"
					github=""
				/>
				<Officer
					name="Gi Lee"
					position="Officer"
					desc="Gi is the art director for ACM who’s responsible for the overall visual aspects of an 
					advertising upcoming events. He is majoring CSSE and is also interested in user experience."
					img="avi-gi"
					linkedIn="hyukgilee"
					github="leeh54"
				/>
			</div>

			<div className="row">
				<Officer
					name="Tom Blanchard"
					position="Officer"
					desc="Tom is a senior studying Applied Computing and Interactive Media Design, graduating in Spring 2020. 
					He's interested in Assistive Technology for folks with varying disabilities, and UX/UI design with 
					accessibility in mind. He also loves to cook and play volleyball on his downtime."
					img="avi-tom"
					linkedIn="tom-blanchard-6b3b1798/"
					github=""
				/>
				<Officer
					name="Drew Kwak"
					position="Officer"
					desc="Drew is a senior pursuing a degree in Computer Science and Software Engineering and currently 
					interested in cloud computing and cyber security. He loves rock climbing, photography, and scuba diving."
					img="avi-drew"
					linkedIn="andrew-kwak-64099b53/"
					github=""
				/>

				<div className="officer no-hover office-dont-show" />
			</div>
		</div>

		<div className="row">
			{/* 
                <Officer
					name=""
					position=""
					desc=""
					img=""
					linkedIn=""
					github=""
				/> 
            */}
			{/* <Officer
					name="Brady Pascoe"
					position="Affiliate Officer"
					desc="Brady is currently a student at UW-Bothell in the CSSE program. He also works as a part-time
					programming tutor at Cascadia College."
					img="avi-brady"
					linkedIn="brady-pascoe-3bba6b13a"
					github="bpas247"
				/> */}
		</div>
		<div className="officer no-hover office-dont-show" />
	</div>
);

export default Officers;

import React from 'react';

const Officer = ({name, position, desc, img, linkedIn, github}) => (
	<div className="officer">
		<div className="officer__avi-container">
			<img src={require(`../images/officers/${img}.jpg`)} alt={`${name}'s Avatar`} />
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
					<img src={require('../images/logos/media/linkedin-social.svg')} alt="LinkedIn logo" />
				</a>
				{github && (
					<a
						className="social__github"
						target="_blank"
						rel="noopener noreferrer"
						href={`https://github.com/${github}`}
						title={`${github} on GitHub`}
					>
						<img src={require('../images/logos/media/github-social.svg')} alt="GitHub Logo" />
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
			<div className="row">
				<Officer
					name="Saam Amiri"
					position="Chair"
					desc="Saam is a Senior studying Computer Science and Software Engineering. He enjoys networking,
							motivating others and solving complex problems that scale."
					img="avi-saam"
					linkedIn="saam-amiri"
					github="saamiam"
				/>
				<Officer
					name="Annie J Kehn"
					position="Vice Chair"
					desc="Annie is a Senior studying Computer Science and Software Engineering. She is looking forward
					to starting her career and wants to help her fellow CS students grow while in school."
					img="avi-annie"
					linkedIn="anniejkehn"
					github="akehn24"
				/>
				<Officer
					name="Michael Vaschillo"
					position="Treasurer"
					desc="Michael is a Senior studying Computer Science and Software Engineering. He is excited to
					help engage students and reshape the CSS department to better prepare students for industry."
					img="avi-michael"
					linkedIn="michael-vaschillo-4b6527135"
				/>
			</div>
			<div className="row row-odd">
				<Officer
					name="Hyeun Belle Kim"
					position="Secretary"
					desc="Belle is a Junior studying Computer Science and Software Engineering. She is interested in
					Program Management and is also the founding Vice Chair of IxDA UWB Chapter."
					img="avi-belle"
					linkedIn="hyeun-belle-kim-2a5812151"
				/>
				<Officer
					name="Michele Chao"
					position="Web Developer"
					desc="Michele is a sophomore studying Interactive Media Design at UW Bothell. She's interested in
					integrating UX/UI design with her minor, geography.."
					img="avi-michele"
					linkedIn="michele-chao-68b86a141"
					github="michelechao"
				/>
			</div>
			<div className="row">
				<Officer
					name="Prathyusha Pillari"
					position="Officer"
					desc="Prathyusha (Prat) is a Junior at UWB studying Computer Science and Software Engineering. She
					is also the founding president of the UWB chapter of Her Campus Media."
					img="avi-prat"
					linkedIn="prathyusha-pillari-0b2114b7"
					github="pratpill"
				/>
				<Officer
					name="Phuc Huynh"
					position="Officer"
					desc="Phuc is a Junior studying Computer Software Engineering. He's interested in software
					engineering, machine learning, and AI. In his spare time, he enjoys hiking and playing
					piano."
					img="avi-billy"
					linkedIn="phuchuynhvu"
					github="Phuc15"
				/>
				<Officer
					name="Xinyu Wang"
					position="Officer"
					desc="Xinyu is a Junior studying Computer Science and Software Engineering. She is interested in
					Artificial Intelligent, algorithms, and playing all kinds of sports."
					img="avi-xinyu"
					linkedIn="xinyu-wang-354b08171"
					github="xinyuhwang"
				/>
			</div>
			<div className="row row-odd">
				<Officer
					name="Lizzy Presland"
					position="Officer"
					desc="Lizzy is a Junior studying Computer Science and Software Engineering. She is interested in
					interdisciplinary research and creative applications of CS paradigms."
					img="avi-lizzy"
					linkedIn="etcadinfinitum"
					github="etcadinfinitum"
				/>
				<Officer
					name="Hannah Sokol"
					position="Officer"
					desc="Hannah is a Junior studying Computer Science and Software Engineering. She is interested in
					Cybersecurity and is also a member of the UW Women's Water Polo Team."
					img="avi-hannah"
					linkedIn="hannahksokol"
					github="hsokol8"
				/>
			</div>
			<div className="row">
				<Officer
					name="Delaney Desmond"
					position="Officer"
					desc="Delaney is a Senior studying Computer Science and Software Engineering, graduating December
					2019. She hopes that she can help other STEM students with the transition from academia to
					working in the Tech Industry."
					img="avi-delaney"
					linkedIn="delaneydesmond"
					github="delaney-desmond"
				/>
				<Officer
					name="Brady Pascoe"
					position="Affiliate Officer"
					desc="Brady is currently a student at UW-Bothell in the CSSE program. He also works as a part-time
					programming tutor at Cascadia College."
					img="avi-brady"
					linkedIn="brady-pascoe-3bba6b13a"
					github="bpas247"
				/>
			</div>
		</div>
		<div className="officer no-hover office-dont-show" />
	</div>
);

export default Officers;

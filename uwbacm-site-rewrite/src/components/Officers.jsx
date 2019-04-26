import React from 'react';

const Officer = ({name, position, desc, img, linkedIn, github}) => (
	<div className="officer">
		<div className="officer__avi-container">
			<img src={`./images/officers/${img}.jpg`} alt={`${name}'s Avatar`} />
		</div>
		<h3>{name}</h3>
		<h4>{position}</h4>
		<div className="officer__hidden">
			<p>
				{desc}
			</p>
			<div className="officer__social">
				<a
					className="social__linkedin"
					target="_blank"
					href={`https://www.linkedin.com/in/${linkedIn}/`}
					title={`${name} on LinkedIn`}
				>
					<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
				</a>
				<a className="social__github" target="_blank" href={`https://github.com/${github}`} title={`${github} on GitHub`}>
					<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
				</a>
			</div>
		</div>
	</div>
);

const Officers = () => (
	<div id="officers" className="center-div">
		<h2>Officers</h2>
		<a target="_blank" href="https://goo.gl/forms/Xt3mg9rXPWkGDdx93">
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
				{/* <div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-saam.jpg" alt="Saam's Avatar" />
					</div>
					<h3>Saam Amiri</h3>
					<h4>Chair</h4>
					<div className="officer__hidden">
						<p>
							Saam is a Senior studying Computer Science and Software Engineering. He enjoys networking,
							motivating others and solving complex problems that scale.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/saam-amiri/"
								title="Saam Amiri on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/saamiam"
								title="SaamIAm on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div> */}
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-annie.jpg" alt="Annie's Avatar" />
					</div>
					<h3>Annie J Kehn</h3>
					<h4>Vice Chair</h4>
					<div className="officer__hidden">
						<p>
							Annie is a Senior studying Computer Science and Software Engineering. She is looking forward
							to starting her career and wants to help her fellow CS students grow while in school.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/anniejkehn/"
								title="Annie Kehn on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/akehn24"
								title="akehn24 on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-michael.jpg" alt="Michael's Avatar" />
					</div>
					<h3>Michael Vaschillo</h3>
					<h4>Treasurer</h4>
					<div className="officer__hidden">
						<p>
							Michael is a Senior studying Computer Science and Software Engineering. He is excited to
							help engage students and reshape the CSS department to better prepare students for industry.
						</p>
						<div className="officer__social">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/michael-vaschillo-4b6527135/"
								title="Michael Vaschillo on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row row-odd">
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-sneha.jpg" alt="Sneha's Avatar" />
					</div>
					<h3>Sneha Ravichadran</h3>
					<h4>Secretary</h4>
					<div className="officer__hidden">
						<p>
							Sneha is a Junior studying Computer Science and Software Engineering. She is passionate
							about AI and Machine Learning and wants to work towards helping others with her coding
							skills.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/sneharav/"
								title="Sneha Ravichadran on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/ravsneha"
								title="ravsneha on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>

				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-michele.jpg" alt="Michele's Avatar" />
					</div>
					<h3>Michele Chao</h3>
					<h4>Web Developer</h4>
					<div className="officer__hidden">
						<p>
							Michele is a sophomore studying Interactive Media Design at UW Bothell. She's interested in
							integrating UX/UI design with her minor, geography.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/michele-chao-68b86a141"
								title="Michele Chao on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/michelechao"
								title="Michele on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-prat.jpg" alt="Prat's Avatar" />
					</div>
					<h3>Prathyusha Pillari</h3>
					<h4>Officer</h4>
					<div className="officer__hidden">
						<p>
							Prathyusha (Prat) is a Junior at UWB studying Computer Science and Software Engineering. She
							is also the founding president of the UWB chapter of Her Campus Media.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/prathyusha-pillari-0b2114b7/"
								title="Prathyusha Pillari on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/pratpill"
								title="pratpill on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-billy.jpg" alt="Phuc's Avatar" />
					</div>
					<h3>Phuc Huynh</h3>
					<h4>Officer</h4>

					<div className="officer__hidden">
						<p>
							Phuc is a Junior studying Computer Software Engineering. He's interested in software
							engineering, machine learning, and AI. In his spare time, he enjoys hiking and playing
							piano.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/phuchuynhvu"
								title="Phuc Huynh on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/Phuc15"
								title="Phuc15 on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-xinyu.jpg" alt="Xinyu's Avatar" />
					</div>
					<h3>Xinyu Wang</h3>
					<h4>Officer</h4>
					<div className="officer__hidden">
						<p>
							Xinyu is a Junior studying Computer Science and Software Engineering. She is interested in
							Artificial Intelligent, algorithms, and playing all kinds of sports.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/xinyu-wang-354b08171/"
								title="Xinyu Wang on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/xinyuhwang"
								title="xinyuhwang on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row row-odd">
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-lizzy.jpg" alt="Lizzy's Avatar" />
					</div>
					<h3>Lizzy Presland</h3>
					<h4>Officer</h4>
					<div className="officer__hidden">
						<p>
							Lizzy is a Junior studying Computer Science and Software Engineering. She is interested in
							interdisciplinary research and creative applications of CS paradigms.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/etcadinfinitum"
								title="Elizabeth Presland on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/etcadinfinitum"
								title="etcadinfinitum on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-hannah.jpg" alt="Hannah's Avatar" />
					</div>
					<h3>Hannah Sokol</h3>
					<h4>Officer</h4>
					<div className="officer__hidden">
						<p>
							Hannah is a Junior studying Computer Science and Software Engineering. She is interested in
							Cybersecurity and is also a member of the UW Women's Water Polo Team.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="www.linkedin.com/in/hannahksokol"
								title="Hannah Sokol on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/hsokol8"
								title="hsokol8 on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-belle.jpg" alt="Hyeun Belle's Avatar" />
					</div>
					<h3>Hyeun Belle Kim</h3>
					<h4>Officer</h4>
					<div className="officer__hidden">
						<p>
							Belle is a Junior studying Computer Science and Software Engineering. She is interested in
							Program Management and is also the founding Vice Chair of IxDA UWB Chapter.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/hyeun-belle-kim-2a5812151/"
								title="Belle Kim on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-delaney.jpg" alt="Delaney's Avatar" />
					</div>
					<h3>Delaney Desmond</h3>
					<h4>Officer</h4>

					<div className="officer__hidden">
						<p>
							Delaney is a Senior studying Computer Science and Software Engineering, graduating December
							2019. She hopes that she can help other STEM students with the transition from academia to
							working in the Tech Industry.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/delaneydesmond/"
								title="Delaney Desmond on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/delaney-desmond"
								title="delaney-desmond on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-danielle.jpg" alt="Danielle's Avatar" />
					</div>
					<h3>Danielle Speroni</h3>
					<h4>Affiliate Officer</h4>
					<div className="officer__hidden">
						<p>
							Danielle is a Junior at UWB studying math. She is skilled in graphic design and works on
							anything design-related for UWB ACM.
						</p>
						<div className="officer__social">
							<a target="_blank" href="https://www.linkedin.com/in/danielle-speroni-455bb6155/">
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row row-odd">
				<div className="officer">
					<div className="officer__avi-container">
						<img src="./images/officers/avi-brady.jpg" alt="Brady's Avatar" />
					</div>
					<h3>Brady Pascoe</h3>
					<h4>Affiliate Officer</h4>

					<div className="officer__hidden">
						<p>
							Brady is currently a student at UW-Bothell in the CSSE program. He also works as a part-time
							programming tutor at Cascadia College.
						</p>
						<div className="officer__social">
							<a
								className="social__linkedin"
								target="_blank"
								href="https://www.linkedin.com/in/brady-pascoe-3bba6b13a/"
								title="Brady Pascoe on LinkedIn"
							>
								<img src="./images/logos/media/linkedin-social.svg" alt="LinkedIn logo" />
							</a>
							<a
								className="social__github"
								target="_blank"
								href="https://github.com/pas247"
								title="bpas247 on GitHub"
							>
								<img src="./images/logos/media/github-social.svg" alt="GitHub Logo" />
							</a>
						</div>
					</div>
				</div>
				<div className="officer no-hover office-dont-show" />
			</div>
		</div>
	</div>
);

export default Officers;

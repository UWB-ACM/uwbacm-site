import React from 'react';
import PricingTable, {CheckMark} from './PricingTable';

const HackathonSponsorshipTable = () => (
	<PricingTable>
		<PricingTable.Header
			entries={[
				{
					color: '#795548',
					name: 'Copper',
					price: '1000'
				},
				{
					color: '#FFA726',
					name: 'Bronze',
					price: '2,000'
				},
				{
					color: '#9baab2',
					name: 'Silver',
					price: '5,000'
				},
				{
					color: '#FFC107',
					name: 'Gold',
					price: '10,000'
				}
			]}
		/>
		<PricingTable.Subtitle>Recruitment</PricingTable.Subtitle>
		<PricingTable.Row
			header="Distribute Recruiting Material"
			columnContent={[CheckMark, CheckMark, CheckMark, CheckMark]}
		/>
		<PricingTable.Row header="Access Resumes" columnContent={['', CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Send Recruiters" columnContent={['', CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Table at Workshop" columnContent={['', 'Half', 'Full', '2-Full']} />

		<PricingTable.Subtitle>Branding</PricingTable.Subtitle>
		<PricingTable.Row header="Handout Swag" columnContent={[CheckMark, CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Logo on Website" columnContent={['Small', 'Small', 'Medium', 'Large']} />
		<PricingTable.Row header="Logo on T-Shirt" columnContent={['', 'Small', 'Medium', 'Large']} />
		<PricingTable.Row header="Logo on Advertisement" columnContent={['', '', 'Medium', 'Large']} />
		<PricingTable.Row header="Host a Meal" columnContent={['', '', '1 Meal', '2 Meals']} />
		<PricingTable.Row header="Speak at Ceremony" columnContent={['', '', '', CheckMark]} />

		<PricingTable.Subtitle>General</PricingTable.Subtitle>
		<PricingTable.Row header="Provide Prizes" columnContent={[CheckMark, CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Provide Mentor" columnContent={[CheckMark, CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Promote API & Product Demos" columnContent={['', CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Provide a Judge" columnContent={['', '', CheckMark, CheckMark]} />
	</PricingTable>
);

export default HackathonSponsorshipTable;

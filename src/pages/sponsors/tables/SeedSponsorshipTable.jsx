import React from 'react';
import PricingTable, {CheckMark} from './interface/PricingTable';

const SeedSponsorshipTable = () => (
	<PricingTable>
		<PricingTable.Header
			entries={[
				{
					color: '#795548',
					name: 'Seed',
					price: '1000'
				},
				{
					color: '#FFA726',
					name: 'Sapling',
					price: '5,000'
				},
				{
					color: '#9baab2',
					name: 'Tree',
					price: '10,000'
				},
				{
					color: '#FFC107',
					name: 'Oak',
					price: '15,000'
				}
			]}
		/>
		<PricingTable.Row header="Logo on Website" columnContent={['Small', 'Small', 'Medium', 'Large']} />
		<PricingTable.Row header="Bring in a Guest Speaker" columnContent={[CheckMark, CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Distribute Recruiting Material" columnContent={['', CheckMark, CheckMark, CheckMark]} />
		<PricingTable.Row header="Future Event Consultation" columnContent={['', '', CheckMark, CheckMark]} />
		<PricingTable.Row header="Logo on Event Posters" columnContent={['', '', '', CheckMark]} />
		<PricingTable.Row header="Hackathon Gold Sponsorship" columnContent={['', '', '', CheckMark]} />
	</PricingTable>
);

export default SeedSponsorshipTable;

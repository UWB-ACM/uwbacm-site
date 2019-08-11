import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import SponsorPage from './';
import Routes from '../../Routes';

// Need to setup the routes in order for this component to work.
const RoutedSponsorPage = () => (
	<Routes>
		<SponsorPage />
	</Routes>
);

describe('sponsor page', () => {
	describe('seed sponsorships section', () => {
		it('should render a title for the section', () => {
			const {getByText} = render(<RoutedSponsorPage />);

			// Navigate to sponsors
			const SponsorButton = getByText('Sponsor');

			expect(SponsorButton).toBeInTheDocument();

			fireEvent.click(SponsorButton);

			expect(getByText('Seed Sponsorships')).toBeInTheDocument();
		});
	});
});

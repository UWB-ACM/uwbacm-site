import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import App from './App';

describe('UWB ACM Website', () => {
	describe('Sponsors Page', () => {
		describe('Seed Sponsorships Section', () => {
			it('should render a title for the section', () => {
				const {getByText} = render(<App />);

				// Navigate to sponsors
				const SponsorButton = getByText('Sponsor');

				expect(SponsorButton).toBeInTheDocument();

				fireEvent.click(SponsorButton);

				expect(getByText('Seed Sponsorships')).toBeInTheDocument();
			});
		});
	});
});

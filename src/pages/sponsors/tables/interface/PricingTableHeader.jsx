import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	/**
	 * An entry to the header of the pricing table
	 */
	entries: PropTypes.arrayOf(
		PropTypes.shape({
			/**
			 * The background color
			 */
			color: PropTypes.string.isRequired,
			/**
			 * The label of the entry
			 */
			name: PropTypes.string.isRequired,
			/**
			 * How much this entry costs
			 */
			price: PropTypes.string.isRequired
		})
	).isRequired
};

const PricingTableHeader = ({entries}) => (
	<tr className="pricing-table__header">
		<th>
			<h2>Sponsor Tiers</h2>
		</th>
		{entries.map((entry, i) => (
			<th key={i}>
				<div>
					<span style={{color: entry.color}}>{entry.name}</span>
					<span>{`$${entry.price}`}</span>
				</div>
			</th>
		))}
	</tr>
);

PricingTableHeader.propTypes = propTypes;

export default PricingTableHeader;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	header: PropTypes.string.isRequired,
	columnContent: PropTypes.arrayOf(PropTypes.node)
};

const PricingTableRow = ({header, columnContent}) => (
	<tr>
		<td>{header}</td>
		{columnContent.map((column, i) => (
			<td key={i}>{column}</td>
		))}
	</tr>
);

PricingTableRow.propTypes = propTypes;

export default PricingTableRow;

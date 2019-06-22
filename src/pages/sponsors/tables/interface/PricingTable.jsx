import React from 'react';
import PricingTableHeader from './PricingTableHeader';
import PricingTableRow from './PricingTableRow';

export const CheckMark = <img src={require('../../../../images/others/check.svg')} alt="Check Mark" />;

const PricingTableSubtitle = ({children}) => (
	<tr className="pricing-table__subtitle">
		<td colSpan="5">
			<span>{children}</span>
		</td>
	</tr>
);

const PricingTable = ({children}) => (
	<div className="pricing-table__wrapper">
		<table className="pricing-table">
			<tbody>
				{children}
				<tr className="pricing-table__footer">
					<td colSpan="5">Please contact us to arrange a customized sponsorship package</td>
				</tr>
			</tbody>
		</table>
	</div>
);

PricingTable.Row = PricingTableRow;
PricingTable.Header = PricingTableHeader;
PricingTable.Subtitle = PricingTableSubtitle;

export default PricingTable;

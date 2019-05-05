import React from 'react';
import Check from '../../images/others/check.svg';

export const PricingTableHeader = ({entries}) => (
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

export const PricingTableRow = ({header, columnContent}) => (
	<tr>
		<td>{header}</td>
		{columnContent.map((column, i) => (
			<td key={i}>{column}</td>
		))}
	</tr>
);

export const PricingTableSubtitle = ({children}) => (
	<tr className="pricing-table__subtitle">
		<td colSpan="5">
			<span>{children}</span>
		</td>
	</tr>
);

export const CheckMark = <img src={Check} alt="Check Mark" />;

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

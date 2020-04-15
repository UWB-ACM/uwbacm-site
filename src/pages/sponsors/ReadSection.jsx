import React from 'react';

const ReadSection = ({table, gray, className, children}) => {
	let prefix = 'read-section';
	return (
		<div className={`${prefix} ${className} ${gray ? `${prefix}--gray` : ''}`}>
			<div className="read-section__center">{children}</div>
			{table ? table : null}
		</div>
	);
};

export default ReadSection;

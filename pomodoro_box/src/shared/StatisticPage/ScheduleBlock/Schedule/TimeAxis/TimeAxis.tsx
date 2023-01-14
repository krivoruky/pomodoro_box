import React from 'react';
import styles from './timeaxis.module.css';

export function TimeAxis() {
	const timeValues = ["1 ч 40", "1 ч 15", "50", "25"]

	return (
		<div className={styles.timeAxis}>
			<ul>
				{timeValues.map((timeValue, index) => (
					<li key={index}>
						<div className={styles.divider} />
						<span>{timeValue} мин</span>
					</li>
				))}
			</ul>
		</div>
	);
}

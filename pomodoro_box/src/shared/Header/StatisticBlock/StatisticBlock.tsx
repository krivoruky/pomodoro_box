import React from 'react';
import styles from './statisticblock.module.css';

export function StatisticBlock() {
	return (
		<div className={styles.statisticBlock}>
			<div className={styles.statisticIcon}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22" />
				</svg>
			</div>
			<span className={styles.statisticText}>Статистика</span>
		</div>
	);
}

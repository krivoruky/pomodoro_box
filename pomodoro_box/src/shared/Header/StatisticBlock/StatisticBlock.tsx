import React from 'react';
import { Link } from 'react-router-dom';
import styles from './statisticblock.module.css';
import { getCurrentDayOfWeek } from '../../../utils/getCurrentDayOfWeek'

export function StatisticBlock() {
	return (
		<Link className={styles.statisticBlock} to={`/statistics/week/current/day/${getCurrentDayOfWeek()}`}>
			<div className={styles.statisticIcon}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22" />
				</svg>
			</div>
			<span className={styles.statisticText}>Статистика</span>
		</Link>
	);
}

import React from 'react';
import styles from './header.module.css';
import { PomodoroBlock } from "./PomodoroBlock";
import { StatisticBlock } from "./StatisticBlock";

export function Header() {
	return (
		<div className={styles.header}>
			<PomodoroBlock />
			<StatisticBlock />
		</div>
	);
}
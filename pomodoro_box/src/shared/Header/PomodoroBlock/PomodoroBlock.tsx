import React from 'react';
import { Link } from 'react-router-dom';
import styles from './pomodoroblock.module.css';
import { PomodoroIcon } from "../../Icons/PomodoroIcon";

export function PomodoroBlock() {
	return (
		<Link className={styles.pomodoroBlock} to="/">
			<div className={styles.pomodoroIcon}>
				<PomodoroIcon />
			</div>
			<span className={styles.pomodoroText}>pomodoro_box</span>
		</Link>
	);
}

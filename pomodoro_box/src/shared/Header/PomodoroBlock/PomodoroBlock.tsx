import React from 'react';
import styles from './pomodoroblock.module.css';
import { PomodoroIcon } from "../../Icons/PomodoroIcon";

export function PomodoroBlock() {
	return (
		<div className={styles.pomodoroBlock}>
			<div className={styles.pomodoroIcon}>
				<PomodoroIcon />
			</div>
			<span className={styles.pomodoroText}>pomodoro_box</span>
		</div>
	);
}

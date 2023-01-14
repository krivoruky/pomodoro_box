import React from 'react';
import styles from './timerlabel.module.css';
import { UseTimerParams } from "../../../../../hooks/useTimer";

type Props = {
	timerParams: UseTimerParams
}

export function TimerLabel({ timerParams }: Props) {
	return (
		<div className={styles.timerLabel}>
			<div className={styles.taskNumber}>
				Задача {timerParams.currentTaskNumber} - <br />
			</div>
			<div className={styles.taskTitle}>
				{timerParams.currentTask.title}
			</div>
		</div>
	);
}

import React from 'react';
import styles from './timercontent.module.css';
import { Timer } from "./Timer";
import { UseTimerParams } from "../../../hooks/useTimer";

type Props = {
	timerParams: UseTimerParams,
}

export function TimerContent({ timerParams }: Props) {
	return (
		<div className={styles.timerContent}>
			<Timer
				timerParams={timerParams}
			/>
		</div>
	);
}

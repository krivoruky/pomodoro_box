import React from 'react';
import styles from './timer.module.css';
import { UseTimerParams } from "../../../../hooks/useTimer";
import { TimerControls } from "./TimerControls";
import { RenewalButton } from "./RenewalButton";
import { TimerLabel } from "./TimerLabel";
import { TimerValue } from "./TimerValue";

type Props = {
	timerParams: UseTimerParams,
}

export function Timer({ timerParams }: Props) {
	return (
		<div className={styles.timer}>
			<TimerValue timerParams={timerParams} />
			<TimerLabel timerParams={timerParams} />
			<TimerControls timerParams={timerParams} />
			<RenewalButton timerParams={timerParams} />
		</div>
	);
}

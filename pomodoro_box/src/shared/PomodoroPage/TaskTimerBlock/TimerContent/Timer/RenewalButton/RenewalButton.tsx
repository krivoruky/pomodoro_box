import React from 'react';
import styles from './renewalbutton.module.css';
import { IncreaseTimeIcon } from "../../../../../Icons/IncreaseTimeIcon";
import { UseTimerParams } from "../../../../../hooks/useTimer";

type Props = {
	timerParams: UseTimerParams,
}

export function RenewalButton({ timerParams }: Props) {
	return (
		<div className={styles.renewalButton} onClick={timerParams.handleIncreaseTime}>
			<IncreaseTimeIcon />
		</div>
	);
}

import React from 'react';
import { getTimerClassName, GetTimerClassNameParams } from "../../../../../../utils/getTimerHeaderClass";
import { getTimerValue } from "../../../../../../utils/getTimerValue";
import { UseTimerParams } from "../../../../../hooks/useTimer";
import styles from "./timervalue.module.css";

type Props = {
	timerParams: UseTimerParams
}

export function TimerValue({ timerParams }: Props) {
	const timerValueParams: GetTimerClassNameParams = {
		isWork: timerParams.isWork,
		isBreak: timerParams.isBreak,
		defaultClass: styles.timerValue,
		onBreakClass: styles.break,
		onWorkClass: styles.work,
		isPause: timerParams.isPause
	}

	return (
		<div className={getTimerClassName(timerValueParams)}>
			{getTimerValue(timerParams.minutes, timerParams.seconds)}
		</div>
	);
}

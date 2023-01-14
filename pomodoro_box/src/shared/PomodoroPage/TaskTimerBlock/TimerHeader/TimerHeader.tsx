import React from 'react';
import styles from './timerheader.module.css';
import { getTimerClassName, GetTimerClassNameParams } from "../../../../utils/getTimerHeaderClass";
import { UseTimerParams } from "../../../hooks/useTimer";

type Props = {
	timerParams: UseTimerParams,
}

export function TimerHeader({ timerParams }: Props) {
	const params: GetTimerClassNameParams = {
		isWork: timerParams.isWork,
		isBreak: timerParams.isBreak,
		defaultClass: styles.timerHeader,
		onBreakClass: styles.break,
		onWorkClass: styles.work,
	}

	return (
		<div className={getTimerClassName(params)}>
			<div className={styles.taskTitle}>{timerParams.currentTask.title}</div>
			<div className={styles.pomodoroNumber}>Помидор {timerParams.pomodoro}</div>
		</div>
	);
}

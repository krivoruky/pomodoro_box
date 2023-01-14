import React from 'react';
import styles from './counters.module.css';
import { PomodoroCounter } from "./PomodoroCounter";
import { TimerCounters } from "./TimerCounters";
import { Statistics } from "../../../utils/getStatisticsByWeek";

type Props = {
	statisticsByDayOfWeek: Statistics,
}


export function Counters({ statisticsByDayOfWeek }: Props) {
	return (
		<div className={styles.counters}>
			<PomodoroCounter pomodoroCount={statisticsByDayOfWeek.pomodoro_count} />
			<TimerCounters
				focus={statisticsByDayOfWeek.focus}
				stopping={statisticsByDayOfWeek.stopping}
				timeOnPause={statisticsByDayOfWeek.time_on_pause} />
		</div>
	);
}

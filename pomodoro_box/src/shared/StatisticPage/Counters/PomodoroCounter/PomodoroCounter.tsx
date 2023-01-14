import React from 'react';
import { PomodoroIcon } from "../../../Icons/PomodoroIcon";
import styles from "./pomodorocounter.module.css"
// import pomodoro from "../../../../assets/pomodoro.png"

type Props = {
	pomodoroCount: number
}

export function PomodoroCounter({ pomodoroCount }: Props) {
	return pomodoroCount === 0 ? (
		<div className={styles.pomodoroCounter}>
			{/* <img src={pomodoro} alt="pomodoro" /> */}
		</div>
	) : (<div className={styles.pomodoroCounter}>
		<div className={styles.main}>
			<PomodoroIcon />
			<span>х {pomodoroCount}</span>
		</div>
		<div className={styles.footer}>
			<span>{pomodoroCount} помидора</span>
		</div>
	</div>)
}

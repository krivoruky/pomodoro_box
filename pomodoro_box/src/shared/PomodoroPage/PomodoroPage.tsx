import React from 'react';
import styles from './pomodoropage.module.css';
import { TaskTimerBlock } from "./TaskTimerBlock";
import { TasksBlock } from "./TasksBlock";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { TaskState } from "../../store/tasks/reduser";
import { useTimer } from "../hooks/useTimer";

export function PomodoroPage() {
	const tasks = useSelector<RootState, TaskState>(state => state.tasks);
	const [timerParams] = useTimer(tasks.data)

	return (
		<div className={styles.pomodoroPage}>
			<TasksBlock tasks={tasks.data} />
			{tasks.data.length > 0 && (<TaskTimerBlock timerParams={timerParams} />)}
		</div>
	);
}

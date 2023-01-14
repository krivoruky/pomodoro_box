import { useCallback, useEffect } from "react";
import { deleteTask, ITasksData } from "../../store/tasks/actions";
import { useDispatch, useSelector } from "react-redux";
import { setStatistics } from "../../store/statistics/actions";
import { updateTimer } from "../../store/timer/actions";
import { RootState } from "../../store/reducer";
import { TimerState } from "../../store/timer/reduser"

const uuid = require("uuid");

export type UseTimerParams = {
	currentTaskNumber: number,
	currentTask: ITasksData,
	pomodoro: number,
	minutes: number,
	seconds: number,
	handleStart: () => void,
	handleStop: () => void,
	handlePause: () => void,
	handleIncreaseTime: () => void,
	handleScip: () => void,
	isBreak: boolean,
	isWork: boolean,
	isPause: boolean
}

export function useTimer(tasks: ITasksData[]) {
	const dispatch = useDispatch()

	const timer = useSelector<RootState, TimerState>(state => state.timer).data;

	const currentTask = tasks[0]

	const setStatisticsState = useCallback(() => {
		if (timer) {
			dispatch(setStatistics({
				id: uuid.v4(),
				date: new Date(),
				time_on_pause: timer.time_on_pause,
				stopping: timer.stopping,
				pomodoro_count: 1,
				task_execution_time: timer.task_execution_time
			}))

			dispatch(updateTimer({ task_execution_time: 0, time_on_pause: 0, stopping: 0, increased_time: 0 }))
		}
	}, [dispatch, timer])

	const setCompleteState = useCallback(() => {
		dispatch(updateTimer({ is_work: false, is_pause: false, is_break: false }))

		if (timer && timer.pomodoro < currentTask?.pomodoro_count) {
			dispatch(updateTimer({ pomodoro: timer.pomodoro + 1 }))
			setStatisticsState()
		} else if (timer) {
			dispatch(updateTimer({ current_task_number: timer.current_task_number + 1, pomodoro: 1 }))
			dispatch(deleteTask(currentTask.id))
			setStatisticsState()
		}
		dispatch(updateTimer({ minutes: 26, seconds: 60 }))

	}, [currentTask, dispatch, setStatisticsState, timer])

	const handleStart = () => {
		if (timer) {
			dispatch(updateTimer({ is_work: true, minutes: timer.minutes - 1, seconds: timer.seconds - 1 }))
			dispatch(updateTimer({ task_execution_time: timer.task_execution_time + 1 }))
		}
	}

	const handleStop = () => {
		if (timer) {
			dispatch(updateTimer({ is_work: false, seconds: 60 }))
			if (timer.increased_time) {
				dispatch(updateTimer({ minutes: timer.increased_time }))
			} else {
				dispatch(updateTimer({ minutes: 25 }))
			}
			dispatch(updateTimer({ stopping: timer.stopping + 1 }))
		}
	}

	const handlePause = () => {
		if (timer) {
			if (!timer.is_pause) {
				dispatch(updateTimer({ stopping: timer.stopping + 1 }))
			}
			dispatch(updateTimer({ is_pause: !timer?.is_pause }))
		}
	}

	const handleIncreaseTime = () => {
		if (timer && timer.minutes < 59) {
			dispatch(updateTimer({ minutes: timer.minutes + 1, increased_time: timer.minutes + 1 }))
		}
	}

	const handleScip = () => {
		setCompleteState()
		dispatch(updateTimer({ minutes: 25, seconds: 60 }))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer?.is_work && !timer?.is_break && !timer?.is_pause) {
				dispatch(updateTimer({ task_execution_time: timer.task_execution_time + 1 }))
			}
			if (timer?.is_work && !timer?.is_pause) {
				dispatch(updateTimer({ seconds: timer.seconds - 1 }))

				if (timer.seconds === 0) {
					if (timer.minutes === 0 && timer.seconds === 0) {
						if (timer.is_break) {
							setCompleteState()
						} else {
							dispatch(updateTimer({ is_break: true, minutes: 5 }))
						}
					}
					dispatch(updateTimer({ seconds: 60, minutes: timer.minutes - 1 }))
				}
			} else if (timer?.is_work && timer?.is_pause) {
				dispatch(updateTimer({ time_on_pause: timer.time_on_pause + 1 }))
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [dispatch, setCompleteState, timer]);

	const params: UseTimerParams = {
		currentTaskNumber: timer?.current_task_number ? timer?.current_task_number : 1,
		currentTask: currentTask,
		pomodoro: timer?.pomodoro ? timer?.pomodoro : 1,
		minutes: timer?.minutes ? timer?.minutes : 0,
		seconds: timer?.seconds ? timer?.seconds : 0,
		handleStart: handleStart,
		handleStop: handleStop,
		handlePause: handlePause,
		handleIncreaseTime: handleIncreaseTime,
		handleScip: handleScip,
		isBreak: timer?.is_break ? timer.is_break : false,
		isWork: timer?.is_work ? timer.is_work : false,
		isPause: timer?.is_pause ? timer.is_pause : false
	}

	return [params]
}
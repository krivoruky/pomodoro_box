import React from 'react';
import styles from './statisticpage.module.css';
import { DayOfWeekBlock } from "./DayOfWeekBlock";
import { ScheduleBlock } from "./ScheduleBlock";
import { Counters } from "./Counters";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { StatisticsState } from "../../store/statistics/reduser";
import { getStatisticsByWeek, Statistics, Week } from "../../utils/getStatisticsByWeek";
import { useParams } from "react-router-dom";
import { Day, getStatisticsByDayOfWeek } from "../../utils/getStatisticsByDayOfWeek";
import { ErrorMessage } from "../ErrorMessage";
import { validateURI } from "../../utils/validateURI";
import { useTimer } from "../hooks/useTimer";
import { TaskState } from "../../store/tasks/reduser";
import { TaskTimerBlock } from "../PomodoroPage/TaskTimerBlock";

// type Params = {
// 	dayURI: Day
// 	weekURI: Week
// }

export function StatisticPage() {
	const statistics = useSelector<RootState, StatisticsState>(state => state.statistics);
	const params  = useParams();
	const dayURI = params.dayURI as Day;
	const weekURI = params.weekURI as Week;
	const errorMessage = "404 — страница не найдена"

	const statisticsByWeek: Statistics[] = getStatisticsByWeek(statistics.data, weekURI)
	const statisticsByDayOfWeek: Statistics = getStatisticsByDayOfWeek(dayURI, statisticsByWeek)

	const tasks = useSelector<RootState, TaskState>(state => state.tasks);
	const [timerParams] = useTimer(tasks.data)

	return validateURI(dayURI, weekURI) ? (
		<div className={styles.statisticPage}>
			<DayOfWeekBlock statisticsByDayOfWeek={statisticsByDayOfWeek} dayURI={dayURI} />
			<ScheduleBlock statisticsByWeek={statisticsByWeek} />
			<Counters statisticsByDayOfWeek={statisticsByDayOfWeek} />
			{tasks.data.length > 0 && (<TaskTimerBlock timerParams={timerParams} />)}

		</div>
	) : <ErrorMessage errorMessage={errorMessage} />;
}

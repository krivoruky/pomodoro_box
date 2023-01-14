import React from 'react';
import styles from './schedule.module.css';
import { Statistics } from "../../../../utils/getStatisticsByWeek";
import { DayOfWeekAxis } from "./DayOfWeekAxis";
import { TimeAxis } from "./TimeAxis";

type Props = {
	statisticsByWeek: Statistics[],
}

export function Schedule({ statisticsByWeek }: Props) {
	return (
		<div className={styles.schedule}>
			<DayOfWeekAxis statisticsByWeek={statisticsByWeek} />
			<TimeAxis />
		</div>
	);
}

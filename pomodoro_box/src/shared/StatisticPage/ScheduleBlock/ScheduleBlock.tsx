import React from 'react';
import { Schedule } from "./Schedule";
import { StatisticDropdown } from "./StatisticDropdown";
import { Statistics } from "../../../utils/getStatisticsByWeek";
import styles from "./scalesblock.module.css"

type Props = {
	statisticsByWeek: Statistics[],
}

export function ScheduleBlock({ statisticsByWeek }: Props) {
	return (
		<div className={styles.scalesBlock}>
			<StatisticDropdown />
			<Schedule statisticsByWeek={statisticsByWeek} />
		</div>
	);
}

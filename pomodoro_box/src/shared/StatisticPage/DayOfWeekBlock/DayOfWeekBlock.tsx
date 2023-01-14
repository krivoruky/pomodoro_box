import React from 'react';
import styles from './dayofweekblock.module.css';
import { Statistics } from "../../../utils/getStatisticsByWeek";
import { getDayOfWeekByAbbreviated } from "../../../utils/getDayOfWeekByAbbreviated";
import { secondsToHm } from "../../../utils/secondsToHm";
import { Day } from "../../../utils/getStatisticsByDayOfWeek";

type Props = {
	statisticsByDayOfWeek: Statistics,
	dayURI: Day
}

export function DayOfWeekBlock({ statisticsByDayOfWeek, dayURI }: Props) {
	const dayOfWeek = getDayOfWeekByAbbreviated(dayURI)

	return (
		<div className={styles.dayOfWeekBlock}>
			<div className={styles.title}>
				Ваша активность
			</div>
			<div className={styles.weekOfDayCard}>
				<div className={styles.cardTitle}>
					{dayOfWeek}
				</div>
				<div className={styles.cardDescription}>
					{statisticsByDayOfWeek.dayOfWeek ? (
						<>
							<div>Вы работали над задачами</div>
							в течение <span>
								{secondsToHm(statisticsByDayOfWeek.task_execution_time, "full")}
							</span>
						</>
					) : "Нет данных"}
				</div>
			</div>
		</div>
	);
}

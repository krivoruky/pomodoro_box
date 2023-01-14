import React from 'react';
import styles from './timeonpausecounter.module.css';
import {TimeOnPauseIcon} from "../../../../Icons";
import {secondsToHm} from "../../../../../utils/secondsToHm";

type Props = {
    timeOnPause: number
}

export function TimeOnPauseCounter({timeOnPause}: Props) {
    const timeOnPauseCounterClass = timeOnPause >= 60 ? styles.timeOnPauseCounter + " " + styles.isTimeOnPause : styles.timeOnPauseCounter
    const iconIsTimeOnPauseClass = timeOnPause >= 60 ? styles.icon + " " + styles.isTimeOnPause : styles.icon

    return (
        <div className={timeOnPauseCounterClass}>
            <span className={styles.title}>Время на паузе</span>
            <span className={styles.value}>{timeOnPause ? secondsToHm(timeOnPause, "abbreviated") : "0м"}</span>
            <div className={iconIsTimeOnPauseClass}>
                <TimeOnPauseIcon/>
            </div>
        </div>
    );
}

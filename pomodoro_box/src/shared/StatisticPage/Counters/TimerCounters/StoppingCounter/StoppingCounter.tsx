import React from 'react';
import styles from './stoppingcounter.module.css';
import {StoppingIcon} from "../../../../Icons";

type Props = {
    stopping: number
}

export function StoppingCounter({stopping}: Props) {
    const stoppingCounterClass = stopping ? styles.stoppingCounter + " " + styles.isStopping : styles.stoppingCounter
    const iconIsStoppingClass = stopping ? styles.icon + " " + styles.isStopping : styles.icon

    return (
        <div className={stoppingCounterClass}>
            <span className={styles.title}>Остановки</span>
            <span className={styles.value}>{stopping ? stopping : 0}</span>
            <div className={iconIsStoppingClass}>
                <StoppingIcon/>
            </div>
        </div>
    );
}

import React from 'react';
import styles from './timercounters.module.css';
import {FocusCounter} from "./FocusCounter";
import {TimeOnPauseCounter} from "./TimeOnPauseCounter";
import {StoppingCounter} from "./StoppingCounter";

type Props = {
    focus: number,
    timeOnPause: number
    stopping: number
}

export function TimerCounters({focus, stopping, timeOnPause}: Props) {
    return (
        <div className={styles.timerCounters}>
            <FocusCounter focus={focus} />
            <TimeOnPauseCounter timeOnPause={timeOnPause} />
            <StoppingCounter stopping={stopping} />
        </div>
    );
}

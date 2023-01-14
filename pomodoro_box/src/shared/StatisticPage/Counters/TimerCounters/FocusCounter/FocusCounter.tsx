import React from 'react';
import styles from './focuscounter.module.css';
import {FocusIcon} from "../../../../Icons";

type Props = {
    focus: number
}

export function FocusCounter({focus}: Props) {
    const focusCounterClass = focus ? styles.focusCounter + " " + styles.isFocus : styles.focusCounter
    const iconIsFocusClass = focus ? styles.icon + " " + styles.isFocus : styles.icon

    return (
        <div className={focusCounterClass}>
            <span className={styles.title}>Фокус</span>
            <span className={styles.value}>{focus ? focus : 0}%</span>
            <div className={iconIsFocusClass}>
                <FocusIcon/>
            </div>
        </div>
    );
}

import React from 'react';
import styles from './timercontrols.module.css';
import { UseTimerParams } from "../../../../../hooks/useTimer";
import { getTimerClassName, GetTimerClassNameParams } from "../../../../../../utils/getTimerHeaderClass";

type Props = {
	timerParams: UseTimerParams,
}


export function TimerControls({ timerParams }: Props) {
	const stopButtonParams: GetTimerClassNameParams = {
		isWork: timerParams.isWork,
		isBreak: timerParams.isBreak,
		defaultClass: styles.stopButton,
		onBreakClass: styles.break,
		onWorkClass: styles.stopButtonOnWork,
	}

	return (
		<div className={styles.timerControls}>
			{timerParams.isWork && !timerParams.isPause && !timerParams.isBreak &&
				(<>
					<button className={styles.startButton} onClick={timerParams.handlePause}>Пауза</button>
					<button className={getTimerClassName(stopButtonParams)} onClick={timerParams.handleStop}
						disabled={false}>
						Стоп
					</button>
				</>)}

			{!timerParams.isWork && !timerParams.isPause && !timerParams.isBreak &&
				(<>
					<button className={styles.startButton} onClick={timerParams.handleStart}>Старт</button>
					<button className={getTimerClassName(stopButtonParams)}
						disabled={true}>
						Стоп
					</button>
				</>)}

			{timerParams.isPause && !timerParams.isBreak &&
				(<>
					<button className={styles.proceedButton} onClick={timerParams.handlePause}>Продолжить</button>
					<button className={styles.madeButton} onClick={timerParams.handleScip}>Сделано</button>
				</>)
			}

			{timerParams.isBreak && !timerParams.isPause &&
				(<>
					<button className={styles.startButton} onClick={timerParams.handlePause}>Пауза</button>
					<button className={styles.skipButton} onClick={timerParams.handleScip}>Пропустить</button>
				</>)
			}

			{timerParams.isBreak && timerParams.isPause &&
				(<>
					<button className={styles.proceedButton} onClick={timerParams.handlePause}>Продолжить</button>
					<button className={styles.skipButton + " " + styles.skipButtonOnPause}
						onClick={timerParams.handleScip}>
						Пропустить
					</button>
				</>)
			}
		</div>
	);
}

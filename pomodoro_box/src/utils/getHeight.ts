import {Day, getStatisticsByDayOfWeek} from "./getStatisticsByDayOfWeek";
import {Statistics} from "./getStatisticsByWeek";

export function getHeight(day: Day, statisticsByWeek: Statistics[]) {
    let height: number

    const seconds = getStatisticsByDayOfWeek(day, statisticsByWeek).task_execution_time

    if (seconds === 0 || seconds <= 60) {
        height = 5
    } else {
        height = seconds * 0.056
        if (height > 430) {
            height = 430
        }
    }

    return Math.round(height)
}
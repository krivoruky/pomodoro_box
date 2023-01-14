import {Statistics} from "./getStatisticsByWeek";

export type Day =  "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс"

export function getStatisticsByDayOfWeek(day: Day, statisticsByWeek: Statistics[]) {
    let statisticsByDayOfWeek: Statistics = {
        dayOfWeek: "",
        focus: 0,
        task_execution_time: 0,
        pomodoro_count: 0,
        stopping: 0,
        time_on_pause: 0
    };

    statisticsByWeek.forEach((item) => {
        if (day === item.dayOfWeek) {
            statisticsByDayOfWeek = item
        }
    })

    return statisticsByDayOfWeek
}
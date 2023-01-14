import {IStatisticsData} from "../store/statistics/actions";
import moment from "moment";
import {getDayOfWeekByDate} from "./getDayOfWeekByDate";

const currentDate = moment();

export type Statistics = {
    dayOfWeek: string,
    focus: number,
    task_execution_time: number,
    time_on_pause: number,
    stopping: number,
    pomodoro_count: number
}

export type Week = "current" | "last" | "2 weeks ago"

export function getStatisticsByWeek(statistics: IStatisticsData[], week: Week) {
    let statisticsByWeek: Statistics[] = [];

    let statisticDates: Date[] = []

    let filtered: Date[]

    statistics.forEach(item => {
        statisticDates.push(item.date)
    });

    switch (week) {
        case "current":
            filtered = statisticDates.filter(date => moment(date).isSame(currentDate, 'week'));
            break
        case "last":
            filtered = statisticDates.filter(date => moment(date).isSame(moment()
                .subtract(1, 'weeks'), "week"))
            break
        case "2 weeks ago":
            filtered = statisticDates.filter(date => moment(date).isSame(moment()
                .subtract(2, 'weeks'), "week"))
            break
    }

    let res = Object.fromEntries(statistics.map(item => [getDayOfWeekByDate(new Date(item.date), "abbreviated"), {
        stopping: 0, pomodoro_count: 0, time_on_pause: 0, dayOfWeek: "", focus: 0, task_execution_time: 0
    }]));

    statistics.forEach(item => {
        const key = getDayOfWeekByDate(new Date(item.date), "abbreviated")

        if (filtered.includes(item.date)) {
            res[key].stopping += item.stopping
            res[key].pomodoro_count += item.pomodoro_count
            res[key].time_on_pause += item.time_on_pause
            res[key].task_execution_time += item.task_execution_time
            res[key].focus = Math.floor(
                res[key].task_execution_time /
                (res[key].task_execution_time + res[key].time_on_pause) * 100)
            res[key].dayOfWeek = getDayOfWeekByDate(new Date(item.date), "abbreviated")
        }
    })

    for (let key in res) {
        statisticsByWeek.push(res[key])
    }

    return statisticsByWeek
}
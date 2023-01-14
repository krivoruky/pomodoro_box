import {ActionCreator} from "redux";
import {SET_STATISTICS} from "./types";

export interface IStatisticsData {
    id?: string,
    date: Date,
    time_on_pause: number,
    task_execution_time: number,
    stopping: number,
    pomodoro_count: number
}

export type SetStatisticsAction = {
    type: typeof SET_STATISTICS;
    data?: IStatisticsData;
}

export const setStatistics: ActionCreator<SetStatisticsAction> = (data: IStatisticsData) => ({
    type: SET_STATISTICS,
    data
})

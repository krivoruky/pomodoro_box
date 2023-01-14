import {ActionCreator} from "redux";
import {UPDATE_TIMER} from "./types";

export interface ITimerData {
    current_task_number: number;
    pomodoro: number;
    minutes: number;
    seconds: number;
    is_work: boolean;
    is_break: boolean;
    is_pause: boolean;
    time_on_pause: number,
    task_execution_time: number,
    increased_time: number,
    stopping: number,
}

export type UpdateTimerAction = {
    type: typeof UPDATE_TIMER;
    data?: ITimerData;
}

export const updateTimer: ActionCreator<UpdateTimerAction> = (data: ITimerData) => ({
    type: UPDATE_TIMER,
    data
})




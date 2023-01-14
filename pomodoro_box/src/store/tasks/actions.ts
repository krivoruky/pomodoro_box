import {ActionCreator} from "redux";
import {ADD_TASK, DECREASE_POMODORO, DELETE_TASK, EDIT_TASK, INCREASE_POMODORO, SET_EDIT_TASK} from "./types";

export interface ITasksData {
    id?: string;
    title: string;
    pomodoro_count: number;
    time_count: number;
    isEdit?: boolean;
}

export type AddTaskAction = {
    type: typeof ADD_TASK;
    data?: ITasksData;
}

export const addTask: ActionCreator<AddTaskAction> = (data: ITasksData) => ({
    type: ADD_TASK,
    data
})

export type DeleteTaskAction = {
    type: typeof DELETE_TASK;
    data?: ITasksData;
}

export const deleteTask: ActionCreator<DeleteTaskAction> = (data: ITasksData) => ({
    type: DELETE_TASK,
    data
});

export type IncreasePomodoroAction = {
    type: typeof INCREASE_POMODORO;
    data?: ITasksData;
}

export const increasePomodoro: ActionCreator<IncreasePomodoroAction> = (data: ITasksData) => ({
    type: INCREASE_POMODORO,
    data
});

export type DecreasePomodoroAction = {
    type: typeof DECREASE_POMODORO;
    data?: ITasksData;
}

export const decreasePomodoro: ActionCreator<DecreasePomodoroAction> = (data: ITasksData) => ({
    type: DECREASE_POMODORO,
    data
});

export type EditTaskAction = {
    type: typeof EDIT_TASK;
    data?: ITasksData;
}

export const editTask: ActionCreator<EditTaskAction> = (data: ITasksData) => ({
    type: EDIT_TASK,
    data
});

export type SetEditTaskAction = {
    type: typeof SET_EDIT_TASK;
    data?: ITasksData;
}

export const setEditTask: ActionCreator<SetEditTaskAction> = (data: ITasksData) => ({
    type: SET_EDIT_TASK,
    data
});




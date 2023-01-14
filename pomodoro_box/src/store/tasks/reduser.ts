import {Reducer} from "react";
import {
    ITasksData,
    AddTaskAction,
    DeleteTaskAction,
    IncreasePomodoroAction,
    DecreasePomodoroAction,
    EditTaskAction, SetEditTaskAction
} from "./actions";
import {updateTasks} from "../../utils/updateTasks";

export type TaskState = {
    data: ITasksData[];
}

type TaskActions = AddTaskAction
    | DeleteTaskAction | IncreasePomodoroAction |
    DecreasePomodoroAction | EditTaskAction | SetEditTaskAction

export const tasksReducer: Reducer<TaskState, TaskActions> = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            };
        case "DELETE_TASK":
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.data)
            };
        case "INCREASE_POMODORO":
            updateTasks(state.data, action.data, "INCREASE_POMODORO")
            return {
                ...state,
            };
        case "DECREASE_POMODORO":
            updateTasks(state.data, action.data, "DECREASE_POMODORO")
            return {
                ...state,
            };
        case "SET_EDIT_TASK":
            updateTasks(state.data, action.data, "SET_EDIT_TASK")
            return {
                ...state,
            };
        case "EDIT_TASK":
            updateTasks(state.data, action.data, "EDIT_TASK")
            return {
                ...state,
            };
        default:
            return state;
    }
}

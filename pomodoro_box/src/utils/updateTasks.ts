import {ITasksData} from "../store/tasks/actions";

type ActionTypes = "INCREASE_POMODORO" | "DECREASE_POMODORO" | "EDIT_TASK" | "SET_EDIT_TASK"

export function updateTasks(tasks: ITasksData[], data: ITasksData | undefined, actionType: ActionTypes) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]["id"] === data?.id) {
            switch (actionType) {
                case "INCREASE_POMODORO":
                    tasks[i]["pomodoro_count"] += 1
                    tasks[i]["time_count"] += 25
                    break
                case "DECREASE_POMODORO":
                    if (tasks[i]["pomodoro_count"] > 1) {
                        tasks[i]["pomodoro_count"] -= 1
                        tasks[i]["time_count"] -= 25
                    }
                    break
                case "EDIT_TASK":
                    if (data?.title) {
                        tasks[i]["title"] = data?.title
                    }
                    break
                case "SET_EDIT_TASK":
                    tasks[i]["isEdit"] = data?.isEdit
            }
        }
    }
}
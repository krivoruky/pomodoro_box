import {ITasksData} from "../store/tasks/actions";

export function getTotalTime(tasks: ITasksData[]): string {
    let totalTimeCount: number = 0
    for (let i = 0; i < tasks.length; i++) {
        totalTimeCount += tasks[i]["pomodoro_count"] * 25
    }

    if (totalTimeCount > 60) {
        return `${Math.floor(totalTimeCount / 60)} час ${totalTimeCount % 60} мин`
    }
    return `${totalTimeCount} мин`
}
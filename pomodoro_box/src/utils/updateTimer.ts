import {ITimerData} from "../store/timer/actions";

export function updateTimer(timer: ITimerData | undefined, data: ITimerData | undefined) {
    if (data && timer) {
        for (let key in data) {
            switch (key) {
                case "current_task_number":
                    timer[key] = data.current_task_number
                    break
                case "pomodoro":
                    timer[key] = data.pomodoro
                    break
                case "minutes":
                    timer[key] = data.minutes
                    break
                case "seconds":
                    timer[key] = data.seconds
                    break
                case "is_work":
                    timer[key] = data.is_work
                    break
                case "is_break":
                    timer[key] = data.is_break
                    break
                case "is_pause":
                    timer[key] = data.is_pause
                    break
                case "time_on_pause":
                    timer[key] = data.time_on_pause
                    break
                case "task_execution_time":
                    timer[key] = data.task_execution_time
                    break
                case "stopping":
                    timer[key] = data.stopping
                    break
                case "increased_time":
                    timer[key] = data.increased_time
                    break
            }
        }
    }
}



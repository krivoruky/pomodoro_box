export function getTimerValue(minutes: number | string, seconds: number | string): string {
    if (seconds === 60) {
        seconds = 0
    }

    if (String(minutes).length === 1) {
        minutes = "0" + String(minutes)
    }

    if (String(seconds).length === 1) {
        seconds = "0" + String(seconds)
    }

    return `${minutes}:${seconds}`
}

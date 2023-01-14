export type GetTimerClassNameParams = {
    defaultClass: string,
    onWorkClass: string,
    onBreakClass: string,
    isBreak: boolean,
    isWork: boolean
    isPause?: boolean
}

export function getTimerClassName(params: GetTimerClassNameParams) {
    let timerClass = params.defaultClass

    if (params.isWork && !params.isPause) {
        timerClass = params.defaultClass + " " + params.onWorkClass
    }

    if (params.isBreak && !params.isPause) {
        timerClass = params.defaultClass + " " + params.onBreakClass
    }

    return timerClass
}
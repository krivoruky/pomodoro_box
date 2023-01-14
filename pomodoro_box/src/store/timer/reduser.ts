import {Reducer} from "react";
import {UpdateTimerAction, ITimerData} from "./actions";
import {updateTimer} from "../../utils/updateTimer";

export type TimerState = {
    data?: ITimerData;
}

export const timerReducer: Reducer<TimerState, UpdateTimerAction> = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMER":
            updateTimer(state.data, action.data)
            return {
                ...state,
            };
        default:
            return state;
    }
}

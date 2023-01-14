import {Reducer} from "react";
import {IStatisticsData, SetStatisticsAction} from "./actions";

export type StatisticsState = {
    data: IStatisticsData[];
}

type StatisticsActions = SetStatisticsAction
export const statisticsReducer: Reducer<StatisticsState, StatisticsActions> = (state, action) => {
    switch (action.type) {
        case "SET_STATISTICS":
            return {
                ...state,
                data: action.data ? [...state.data, action.data] : []
            };
        default:
            return state;
    }
}

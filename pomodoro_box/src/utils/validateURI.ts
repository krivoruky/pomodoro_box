import {Week} from "./getStatisticsByWeek";
import {Day} from "./getStatisticsByDayOfWeek";

export function validateURI(dayURI: Day, weekURI: Week) {
    const dayValues = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    const weekValues = ["current", "last", "2 weeks ago"]

    return dayValues.indexOf(dayURI) !== -1 && weekValues.indexOf(weekURI) !== -1;
}
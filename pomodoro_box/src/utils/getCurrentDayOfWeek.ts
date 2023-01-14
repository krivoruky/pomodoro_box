import moment from "moment";

export function getCurrentDayOfWeek() {
	const date = moment(new Date()); //Текущая дата
	const dow = date.day();

	switch (dow) {
        case 0:
            return "Вс"
        case 1:
            return "Пн"
        case 2:
            return "Вт"
        case 3:
            return "Ср"
        case 4:
            return "Чт"
        case 5:
            return "Пт"
        case 6:
            return "Сб"
    }
}
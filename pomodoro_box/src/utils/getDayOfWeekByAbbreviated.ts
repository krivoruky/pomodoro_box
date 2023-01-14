export function getDayOfWeekByAbbreviated(abbreviated: string) {
    switch (abbreviated) {
        case "Пн":
            return "Понедельник"
        case "Вт":
            return "Вторник"
        case "Ср":
            return "Среда"
        case "Чт":
            return "Четверг"
        case "Пт":
            return "Пятница"
        case "Сб":
            return "Суббота"
        case "Вс":
            return "Воскресенье"
    }
}
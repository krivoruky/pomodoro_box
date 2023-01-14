export function getDayOfWeekByDate(date: Date, form: "abbreviated" | "full") {
    let daysAbbreviatedForm = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let daysFullForm = ['Воскресенье', 'Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота'];

    if (form === "abbreviated") {
        return daysAbbreviatedForm[date.getDay()];
    }

    return daysFullForm[date.getDay()];
}
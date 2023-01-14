export function validateForm(value: string) {
    const st = new RegExp('[^а-яА-Я a-zA-Z0-9]+')
    let message: string = ""
    let isValid: boolean = true

    if (value.length < 4) {
        message = "Введите значение более 3-х символов"
        isValid = false
    } else if (st.test(value)) {
        message = "Введены некорректные символы"
        isValid = false
    }

    return {isValid, message}
}

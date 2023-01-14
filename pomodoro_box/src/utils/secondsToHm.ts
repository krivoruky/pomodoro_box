export function secondsToHm(d: number, form: "full" | "abbreviated") {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay, mDisplay, sDisplay

    if (form === "full") {
        hDisplay = h > 0 ? h + (h === 1 ? " час " : " часов ") : "";
        mDisplay = m > 0 ? m + (m === 1 ? " минута " : " минут ") : "";
        if (d < 60) {
            sDisplay = s > 0 ? s + (s === 1 ? " секунда " : " секунд ") : "";
        }
    } else {
        hDisplay = h > 0 ? h + "ч " : "";
        mDisplay = m > 0 ? m + "м " : "";
        if (d < 60) {
            sDisplay = s > 0 ? s + "с " : "";
        }
    }

    if (sDisplay) {
        return hDisplay + mDisplay + sDisplay;
    }

    return hDisplay + mDisplay
}
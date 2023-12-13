function getUTCOffset() {
    const now = new Date();
    const timezoneOffsetInHours = now.getTimezoneOffset() / 60;
    return -timezoneOffsetInHours;
}

console.log(getUTCOffset());
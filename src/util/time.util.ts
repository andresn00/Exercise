export const toMilliseconds = (hrs: number, min: number) => {
    return hrs * 60 * 60 + min * 60
}

export const toMillisecondsFromStr = (timeStr: string) => {
    const [hrs, min] = timeStr.split(':')
    return toMilliseconds(+hrs, +min)
}

export const toHours = (milliseconds: number) => milliseconds / 60 / 60
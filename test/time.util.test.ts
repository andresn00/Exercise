import { expect, test, describe } from "vitest";
import { toHours, toMilliseconds, toMillisecondsFromStr } from "../src/util/time.util";

describe('Should convert time properly', () => {
    test('Should convert hours and minutes to milliseconds', () => {
        const hours = 10
        const minutes = 30
        const expectedMilliseconds = 37800000
        expect(toMilliseconds(hours, minutes)).toBe(expectedMilliseconds)
    })

    test('Should convert HH:MM time string to milliseconds', () => {
        const timeStr = '12:30'
        const expectedMilliseconds = 45000000
        expect(toMillisecondsFromStr(timeStr)).toBe(expectedMilliseconds)
    })

    test('Should convert milliseconds to hours', () => {
        const milliseconds = 72000000
        const expectedHours = 20
        expect(toHours(milliseconds)).toBe(expectedHours)
    })
})